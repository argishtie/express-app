export default function (req, res, next) {
  try {
    const { method } = req;

    const allowedMethods = [
      'GET',
      'HEAD',
      'POST',
      'PUT',
      'PATCH',
      'DELETE',
      'OPTIONS'
    ];

    res.setHeader('Access-Control-Allow-Methods', allowedMethods.join(','));
    res.setHeader('Access-Control-Allow-Origin', "https://google.com");
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('X-Powered-by', 'Node 4 Hamaynq');

    if (method === 'OPTIONS') {
      res.send('Allow methods: GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS')
      return;
    }

    next()
  } catch (e) {
    next(e)
  }
}
