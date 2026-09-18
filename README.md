# Redux Example

A small React and TypeScript application demonstrating global state management with Redux Toolkit.

The application allows users to be added to a Redux store with a name and favorite color, displays the current list of users, and allows users to be removed from the store.

## Features

* Add users to the Redux store
* Assign each user a favorite color
* Display users stored in Redux state
* Remove users from the Redux store
* Demonstrates Redux state updates and component interaction

## Tech Stack

* **React**
* **TypeScript**
* **Redux Toolkit**
* **React Redux**
* **Create React App**

## Purpose

This project was created as a focused example of managing shared application state with Redux Toolkit and TypeScript.

It demonstrates the basic flow of:

```text
Component
    ↓
Dispatch Action
    ↓
Redux Slice
    ↓
Updated Store
    ↓
Connected Components
```

## Running Locally

Clone the repository:

```bash
git clone https://github.com/n-scovell/ReduxExample.git
cd ReduxExample
npm install
npm start
```

The application will be available at:

http://localhost:3000

## Live Demo

https://redux-example-psi.vercel.app/

## Project

A small technical example focused on React state management with Redux Toolkit and TypeScript.
