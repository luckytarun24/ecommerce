# E-Commerce Website Project using Vite and React

Welcome to the E-Commerce Website Project! This project demonstrates the development of an e-commerce website using the Vite build tool and React framework. The project focuses on creating a clean and organized codebase while building various components and features for an e-commerce platform.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Components](#components)
- [Reducers](#reducers)
- [Routes](#routes)
- [Store](#store)
- [Utils](#utils)
- [Acknowledgments](#acknowledgments)

## Introduction

This project serves as a practical example of building an e-commerce website using Vite and React. By exploring the codebase and understanding its structure, components, and features, developers can learn about modern web development practices, clean coding, and state management.

## Features

The project demonstrates the following key features:

- User authentication and registration
- Product catalog display with images
- Shopping cart functionality
- Checkout process and billing information
- Responsive layout for various devices

## Getting Started

### Prerequisites

- Basic understanding of HTML, CSS, and JavaScript
- Familiarity with React concepts

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/luckytarun24/ecommerce-frontend.git
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   The website will be accessible at `http://localhost:3000`.

## Project Structure

The project directory structure is organized as follows:

- `public`: Public files and configuration
- `src`: Main source code directory
  - `assets`: Images and resources
  - `components`: Reusable UI components
  - `layout`: Layout components for different sections
  - `reducers`: Redux state management slices
  - `routes.jsx`: Application routing
  - `store`: Redux store configuration
  - `utils`: Utility functions and constants
  - `main.jsx`: Entry point

## Components

The `components` directory contains various UI components used in the application. These components are organized under different sections:

- `breadCrumbs`: Breadcrumbs component with styling and utilities
- `card`: Card component used for displaying product information
- `carousel`: Carousel component for showcasing images
- `cart`: Shopping cart component with related sub-components
- `cartDropDown`: Cart dropdown with utilities and styling
- `checkout`: Checkout process components
- ...and more

## Reducers

The `reducers` directory holds Redux state management slices:

- `cart`: State management for the shopping cart
- `productDetails`: State management for product details
- `snackBar`: State management for displaying snackbars

## Routes

The `routes.jsx` file defines the application's routes using React Router.

## Store

The `store` directory contains the Redux store configuration using Redux Toolkit.

## Utils

The `utils` directory holds various utility functions and constants used throughout the application.

## Acknowledgments

This project is a practical demonstration of building an e-commerce website using Vite and React. It emphasizes clean code practices, component reusability, and state management.
