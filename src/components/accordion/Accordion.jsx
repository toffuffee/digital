import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styles from "./Accordion.module.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "white",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.accordionBlock}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Sector analysis</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Connectivity & transport: products, revenue model and finance</b>
            <br />
            <b>Products:</b> <br /> Local traffic is carried on fixed and
            wireless access networks. Linked up by metropolitan, national &
            international backbone networks. <br />
            <b>Providers:</b> <br /> Traditional fixed and mobile telecom
            companies (“telcos”), satellite operators and cable operators
            “Carrier-neutral” wholesale providers and various resellers <br />
            <b>Revenue model:</b> <br /> Shifted away from fees for usage
            towards monthly rental in 20 years. Mobile revenue has supplanted
            fixed; data revenue is supplanting voice & text. <br />
            <b>Finance:</b> <br /> Cashflow management and investment are
            getting more difficult. The integrated telco remains the main
            investable unit. Traditional equity and debt are the main sources of
            finance, though PPP and public finance are growing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Market insights</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>
              Markets are at different stages and have different infrastructure
              priorities
            </b>
            <br />
            <b>Emerging:</b> <br /> National broadband plans are high level
            only. Mobile technologies are the policy focus. <br /> Mobile
            coverage is expanding but fixed broadband is neglected.
            International connectivity is limited. <br /> Not a current policy
            priority. Limited data infrastructure and inadequate international
            connectivity. <br />
            <em>Capital for mobile coverage is the priority.</em>
            <br />
            <b>Developing:</b> <br /> National broadband plans are clearer, but
            only Malaysia has seen effective public investment. <br />
            Focus is on universal mobile coverage and urban fixed broadband
            coverage. <br />
            Efforts to attract data infrastructure investment to support
            economic growth. <br />
            <em>
              Upgraded mobile network, fixed broadband, and data infrastructure
              are priorities.
            </em>
            <br />
            <b>Developed:</b> <br /> Government has encouraged mass fixed
            broadband rollout by private investors. <br />
            Focus on superfast broadband with national coverage targets. <br />
            Data infrastructure extensively used to collect and synthesize
            information for policy making and business. <br />
            <em>
              Infrastructure spinoffs and sharing will grow, driven by business
              needs and regulation.
            </em>
            <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Social benefits, policy & regulations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>
              Digital Infrastructure delivers significant social-economic
              benefits
            </b>
            <br />
            <em>
              Higher impacts to GDP growth for high broadband penetration (more
              than 30%) markets
            </em>
            <br />
            <b>Broadband infrastructure investment:</b>
            <br />
            strongly correlated with social-economic benefits delivery in
            developing countries. (see figure on the right side) <br />
            <b>Broadband infrastructure: the strongest economic driver</b>
            <br />
            Every 10% increase in broadband (3G & above) penetration increases
            GDP pa in developing countries by 1.38% <br />
            Doubling broadband speed leads to 0.3% increase in GDP pc growth{" "}
            <br />
            3G to 4G and 5G upgrades will contribute to 1.2% and 2.1% increase
            in GDP pc growth respectively (assuming the same penetration)
            <br />
            ~30 jobs creation per USD1M investment in broadband infrastructure{" "}
            <br />
            <b>Citizen inclusion and digital empowerment</b> <br />
            Broadband Internet connectivity overcomes digital divide, reduces
            poverty and enhances gender equity in emerging and developing
            markets <br />
            <b>Innovations</b> <br />
            Service and business model innovations have potential to produce
            dynamic efficiency gains of huge economic benefits <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Financing landscape</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Findings and conclusions</b> <br />
            <b>Digital Infrastructure investment</b> is not growing fast enough
            to meet projected needs based on growing population and usage,
            leaving an investment gap. <br />
            Compared to other Asian infrastructure sectors, Digital
            Infrastructure investment is dominated by <b>private capital.</b>
            <br />
            Most of this investment is funded internally by the Digital
            Infrastructure industries. Of the remainder,
            <b> project finance dominates</b>, followed by corporate finance.
            <br />
            However, <b>public and PPP funding</b> of Digital Infrastructure
            exists small, and is likely to grow because the external social and
            economic benefits of Digital Infrastructure are widely recognized.
            <br />
            This will <b>open up new opportunities for private capital</b> to
            participate in the expansion of digital access, as governments seek
            to mobilize private capital to achieve these external benefits. The
            size of the digital investment gap suggests that a serious
            government push to address the gap would open up large financial
            opportunities. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
            Challenges, actions and opportunities for AIIB
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Challenges to financers and investors</b>
            <br />
            <b>1.</b> Decreasing income and squeezing margin of operators
            curtail corporate finance capability (private investment) to sustain
            investment in Digital Infrastructure (e.g. 5G) through corporate
            financing. <br />
            <b>2.</b> The challenging financial return (but high economic
            benefit) of sub-urban and rural connectivity (e.g. fixed and mobile
            broadband) discourages private investments, and widens digital
            divide and inclusion gaps especially in mid and low incomes markets.
            <br />
            <b>3.</b> The social-economic and externality benefits (e.g.
            synergic benefits to adjunct infrastructure industries and other
            sectors) of Digital Infrastructure are not well understood and
            recognized by financing / investment community, as well as well
            coordinated and supported by the national policy & regulations in
            related adjunct industries and sectors. <br />
            <b>4.</b> Lack of investment policy incentives and investor-friendly
            regulations to support financing and rollout of capital intensive
            infrastructure (e.g. satellite) build in sub-urban, rural or terrain
            difficult areas. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
