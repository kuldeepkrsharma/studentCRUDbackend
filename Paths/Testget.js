function Testget(res,req)
{
    res.status(200).json({
    success: true,
    message: "Data retrieved successfully",
    data: req.userdata
  });
}
module.exports = Testget;