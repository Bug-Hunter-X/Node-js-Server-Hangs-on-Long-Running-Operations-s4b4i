# Node.js Server Hangs on Long-Running Operations

This repository demonstrates a common issue in Node.js applications where long-running operations can block the event loop, causing the server to hang and become unresponsive.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution using asynchronous operations.

## Problem

Node.js is single-threaded.  When a long-running synchronous operation is performed within a request handler (as shown in `bug.js`), the event loop is blocked.  This prevents the server from handling new requests or even responding to existing ones until the operation completes.

## Solution

The solution lies in utilizing asynchronous operations.  By leveraging asynchronous functions (or libraries designed for asynchronous operations), you allow the event loop to continue processing other tasks while the long-running operation happens concurrently in the background. This keeps your server responsive.