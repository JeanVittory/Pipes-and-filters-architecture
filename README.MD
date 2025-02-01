# NLPipe

Cascading Text Processing with Artificial Intelligence.

## Pipes and Filters architecture

<div align="center">
 <img src="https://github.com/JeanVittory/Pipes-and-filters-architecture/blob/main/src/assets/arch.svg?raw=true" alt="flow chart" width="700" />
</div>

## Tech

This text processor use

- Typescript - A language for application-scale JavaScript.
- Multer - Node.js middleware for handling multipart/form-data.
- Winston - Multi-transport async logging library.
- Natural - General natural language facility.
- Node.js - Evented I/O for the backend.
- Express - Fast node.js network app framework.

## Installation

```sh
npm i
npm run dev
```

## Bayesian classifier

This application uses NLP for the Bayesian classifier. To train your own model, you can use the trainingData.ts file in the bayesian folder or replace it with your own data. Please use the same structure defined in the trainingData file.

```sh
npm run trainClassifier
```
