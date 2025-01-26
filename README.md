# Expo CLI Development Server Intermittent Disconnection

This repository demonstrates a bug encountered with the Expo CLI, where the development server unexpectedly disconnects, resulting in a 'connection closed' error.  The issue is intermittent and lacks clear error messages, making debugging challenging. This repo shows steps to reproduce the problem and the implemented workaround.

## Steps to Reproduce
1. Clone this repository.
2. Navigate to the project directory.
3. Run `expo start`.
4. Observe the development server for intermittent disconnections. Note the lack of specific error details in logs.

## Workaround
The provided solution (`expoBugSolution.js`) includes a workaround that involves monitoring the connection and attempting to automatically restart the server if a disconnection is detected.  This is a temporary measure while awaiting a more definitive solution from the Expo team.

## Potential Causes
The issue might be related to network instability, Expo CLI bugs, or potential interactions between Expo and other applications or system processes. Further investigation is needed to pinpoint the exact cause.

## Contributing
Contributions to enhance this reproduction or identify the root cause are welcome. Please feel free to submit pull requests or open issues.