import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import N3Parser from '@rdfjs/parser-n3';
import { Readable } from "readable-stream"

const useGraph = (containerSelector, ttlPath) => {
  const [activeNode, setActiveNode] = useState(null);

  useEffect(() => {
    d3.select('aside').classed('circle-aside--active', !!activeNode);
  }, [activeNode]);

  useEffect(() => {
    d3.text(ttlPath).then((rdfContent) => {
      const nodes = [];
      const links = [];

      function getNode(nodeId, weight = 10) {
        const existingNode = nodes.find((node) => node.id === nodeId);

        if (
          nodeId ===
          'http://www.semanticweb.org/pojar/ontologies/2023/9/#Digital_Infrastructure'
        ) {
          weight = 30;
        }

        if (existingNode) {
          return existingNode;
        } else {
          const newNode = {
            id: nodeId,
            name: nodeId,
            weight
          };
          nodes.push(newNode);
          return newNode;
        }
      }

      function uuidv4() {
        return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
          (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
          ).toString(16)
        );
      }

      function getPathForLink(d) {
        const x1 = d.source.x;
        const x2 = d.target.x;
        const y1 = d.source.y;
        const y2 = d.target.y;

        return `M ${x1} ${y1} L ${x2} ${y2}`;
      }

      function isConnectedNode(d, n) {
        return links.some(
          (link) =>
            (link.source === d && link.target === n) ||
            (link.target === d && link.source === n)
        );
      }

      const stream = Readable.from(rdfContent);

      const parser = new N3Parser();

      parser
        .import(stream)
        .on('data', (triple) => {
          if (
            ![triple.subject.value, triple.object.value].includes(
              'http://www.w3.org/2002/07/owl#Class'
            )
          ) {
            const sourceNode = getNode(triple.subject.value);
            const targetNode = getNode(triple.object.value);
            const predicate = triple.predicate.value;

            links.push({
              source: sourceNode,
              target: targetNode,
              predicate,
              weight: 1,
              id: uuidv4()
            });
          }
        })
        .on('end', function () {
          const root = d3.select(containerSelector);

          const width = window.innerWidth;
          const height = root.node().getBoundingClientRect().height;

          const color = d3.scaleOrdinal(d3.schemeCategory10);

          const simulation = d3
            .forceSimulation(nodes)
            .force('center', d3.forceCenter())
            .force('link', d3.forceLink(links))
            .force('charge', d3.forceManyBody().strength(-1000))
            .force('x', d3.forceX().strength(0.4))
            .force('y', d3.forceY().strength(0.6))
            .force(
              'collide',
              d3.forceCollide().radius((d) => d.r * 10)
            );

          const zoom = d3
            .zoom()
            .scaleExtent([0.5, 4])
            .on('zoom', (event) => {
              container.attr('transform', event.transform);
            });

          const svg = root
            .style('position', 'relative')
            .append('svg')
            .call(zoom)
            .attr('width', width)
            .attr('height', height)
            .attr('style', 'max-width: 100%; height: auto;')
            .attr('viewBox', [-width / 2, -height / 2, width, height]);

          const container = svg
            .append('g')
            .attr('id', 'container')
            .style('cursor', 'grab');
          const linksGroup = container.append('g').attr('id', 'links');
          const nodesGroup = container.append('g').attr('id', 'nodes');

          const popup = d3.select('aside');

          const link = linksGroup
            .selectAll('path')
            .data(links)
            .enter()
            .append('path')
            .attr('stroke', '#999')
            .attr('stroke-width', '1px')
            .attr('id', (d) => `lid-${d.id}`)
            .attr('d', getPathForLink);

          simulation.on('tick', updateGraph);
          d3.select(window).on('resize', updateGraph);

          function updateGraph() {
            const width = svg.node().getBoundingClientRect().width;
            const height = svg.node().getBoundingClientRect().height;

            svg.attr('viewBox', [-width / 2, -height / 2, width, height]);
            link.attr('d', getPathForLink);

            node.attr('transform', function (d) {
              return 'translate(' + d.x + ',' + d.y + ')';
            });
          }

          function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
            container.style('cursor', 'grabbing');
          }

          function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
          }

          function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
            container.style('cursor', 'grab');
          }

          const node = nodesGroup
            .selectAll('g')
            .data(nodes)
            .enter()
            .append('g')
            .call(
              d3
                .drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended)
            );

          node
            .append('circle')
            .attr('r', (d) => d.weight)
            .attr('fill', '#000')
            .attr('fill', (d) => color(d.id));

          node
            .append('text')
            .attr('class', 'node-label')
            .style('font', 'normal 6px Arial')
            .attr('x', (d) => d.weight + 1)
            .text(function (d) {
              return d.name.split('/')?.at(-1)?.split('#').at(-1) ?? d.name;
            });

          node.selectAll('circle').on('mouseenter', function (_, d) {
            node
              .transition()
              .style('opacity', (n) =>
                isConnectedNode(d, n) || n === d ? 1 : 0.25
              );
            link
              .transition()
              .style('opacity', (l) =>
                l.source === d || l.target === d ? 1 : 0.25
              );
          });

          node.selectAll('circle').on('click', (_, d) => {
            setActiveNode(d.name);
            popup.classed('circle-aside--active', true);
          });

          node.selectAll('circle').on('mouseleave', function () {
            link.transition().style('opacity', 1);
            node.transition().style('opacity', 1);
          });
        })
        .on('error', function (error) {
          console.error(error);
        });
    });

    return () => {
      document.querySelector(`${containerSelector} > svg`)?.remove();
    };
  }, [ttlPath, containerSelector]);

  return { activeNode, setActiveNode };
};

export default useGraph;
