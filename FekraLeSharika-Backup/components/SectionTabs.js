import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import CustomTabs from "./CustomTabs.js";
import FinancialSubs from "./FinancialSubs";
import ImageAndTractionGrowthSubs from "./ImageAndTractionGrowthSubs";
import WebsitesAndAppsSubs from "./WebsitesAndAppsSubs";
import CustomerInteractionSubs from "./CustomerInteractionSubs";
import WorkflowSubs from "./WorkflowSubs";
import styles from "../styles/material-kit-react/views/componentsSections/tabsStyle.js";
import IdeaValidationSubs from "./IdeaValidationSubs.js";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <div className ="columns is-centered">
              <p className ="title is-centered">Which Resource Are you Looking For?</p>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Image & Traction",
                    tabIcon: AddShoppingCartIcon,
                    tabContent: (
                        <ImageAndTractionGrowthSubs />
                    )
                  },
                  {
                    tabName: "Financial",
                    tabIcon: MonetizationOnIcon,
                    tabContent: (
                        <FinancialSubs />
                    )
                  },
                  {
                    tabName: "Websites & Apps",
                    tabIcon: DeveloperModeIcon,
                    tabContent: (
                        <WebsitesAndAppsSubs />
                    )
                  },
                  {
                    tabName: "Customer Interaction",
                    tabIcon: PeopleOutlineIcon,
                    tabContent: (
                        <CustomerInteractionSubs />
                    )
                  },
                  {
                    tabName: "Idea Validation",
                    tabIcon: ThumbsUpDownIcon,
                    tabContent: (
                        <IdeaValidationSubs />
                    )
                  },
                  {
                    tabName: "Workflow",
                    tabIcon: DoneAllIcon,
                    tabContent: (
                        <WorkflowSubs />
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}