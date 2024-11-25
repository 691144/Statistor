import { Topic } from '../../types';
import { dataTypes } from './data-types';
import { centralTendency } from './central-tendency';
import { dispersion } from './dispersion';
import { probabilityDistributions } from './probability-distributions';
import { hypothesisTesting } from './hypothesis-testing';
import { confidenceIntervals } from './confidence-intervals';
import { frequencyDistributions } from './frequency-distributions';
import { graphicalRepresentations } from './graphical-representations';
import { basicProbability } from './basic-probability';
import { samplingDistributions } from './sampling-distributions';
import { regressionAnalysis } from './regression-analysis';
import { correlationVariance } from './correlation-variance';

export const topics: Topic[] = [
  dataTypes,
  centralTendency,
  dispersion,
  probabilityDistributions,
  hypothesisTesting,
  confidenceIntervals,
  frequencyDistributions,
  graphicalRepresentations,
  basicProbability,
  samplingDistributions,
  regressionAnalysis,
  correlationVariance
];
