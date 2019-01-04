/**
       * Encodes a URL to a shortened URL.
       *
       * @param {string} longUrl
       * @return {string}
       */
      let urls = [];
      let baseUrl = "http://tinyurl.com/";
      var encode = function(longUrl) {
        urls.push(longUrl);
        return baseUrl + (urls.length - 1);
      };

      /**
       * Decodes a shortened URL to its original URL.
       *
       * @param {string} shortUrl
       * @return {string}
       */
      var decode = function(shortUrl) {
        let index = +shortUrl.slice(baseUrl.length, shortUrl.length);
        return urls[index];
      };

      /**
       * Your functions will be called as such:
       * decode(encode(url));
       */