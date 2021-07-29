import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";

import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading..";
  }

  const cardDetails = [
    {
      classes: [styles.card, styles.infected],
      title: `Infected`,
      value: confirmed.value,
      description: `Number of active cases of COVID-19`,
    },
    {
      classes: [styles.card, styles.recovered],
      title: `Recovered`,
      value: recovered.value,
      description: `Number of recoveries from COVID-19`,
    },
    {
      classes: [styles.card, styles.deaths],
      title: `Deaths`,
      value: deaths.value,
      description: `Number of deaths caused by COVID-19`,
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardDetails.map((card) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(card.classes[0], card.classes[1])}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={card.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
