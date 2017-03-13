'use strict';

/* Returns recomended scholarships
 * Accessed at POST /max_scholarship */
exports.postMatrix = (req, res) => {
  const data = req.body.data;
  res.status(200).json({sequence: data, total: data.length});
};

function seqTotal(seq) {
  return seq.reduce((acc, val) => acc * val);
}
exports.seqTotal = seqTotal;

function arrToSeq(matrix) {
  return matrix[1];
}
exports.arrToSeq = arrToSeq;
