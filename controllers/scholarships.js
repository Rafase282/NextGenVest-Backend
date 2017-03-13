'use strict';

/* Returns recomended scholarships
 * Accessed at POST /max_scholarship */
exports.postMatrix = function (req, res) {
  const data = req.body.data;
  res.status(200).json({sequence: data, total: data.length});
};
