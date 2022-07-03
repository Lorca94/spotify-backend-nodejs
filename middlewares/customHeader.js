const customHeader = (req, res, next) => {
  try{
    const apiKey = req.headers.apiKey;
    if(apiKey === "lorca-01"){
      next();
    } else {
      res.status(403);
      res.send({error: "API_KEY_NO_ES_VALIDO "})
    }

  }catch(e) {
    res.status(403);
    res.send({error: "UPS_ALGO_HA_FALLADO"})
  }
};

module.exports = customHeader;