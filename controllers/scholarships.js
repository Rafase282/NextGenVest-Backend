'use strict';

/* Get Welcome Message From Root
 * Displays a welcome message when visiting the root of the API.
 * Accessed at GET /api/v# */
exports.getWelcome = function (req, res) {
  const msg = `Welcome, check the API usage at ${process.env.APP_URL}, there is nothing to do here.`;
  res.status(200).json({success: true, message: msg});
};

/* Creates New Manga
 * Returns the manga information.
 * Accessed at POST /api/v#/max_scholarship */
exports.postMatrix = function (req, res) {
  const data = req.body.data;
  res.status(200).json({sequence: data, total: data.length});
};
