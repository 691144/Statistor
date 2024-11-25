import { Topic } from '../types';
import { statisticalFoundations } from './topics/statistical-foundations';
import { dataTypes } from './topics/data-types';
import { centralTendency } from './topics/central-tendency';
import { dispersion } from './topics/dispersion';
import { probabilityDistributions } from './topics/probability-distributions';
import { hypothesisTesting } from './topics/hypothesis-testing';
import { confidenceIntervals } from './topics/confidence-intervals';
import { frequencyDistributions } from './topics/frequency-distributions';
import { graphicalRepresentations } from './topics/graphical-representations';
import { basicProbability } from './topics/basic-probability';
import { samplingDistributions } from './topics/sampling-distributions';
import { regressionAnalysis } from './topics/regression-analysis';
import { correlationVariance } from './topics/correlation-variance';

export const topics: Topic[] = [
  statisticalFoundations,
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