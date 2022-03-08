var nock = require('nock');
module.exports = function() {
nock.define([
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "insert",
      "schema": "test",
      "table": "books",
      "records": [
        {
          "name": "Doug",
          "age": 32
        }
      ]
    },
    "status": 200,
    "response": {
      "message": "inserted 1 of 1 records",
      "inserted_hashes": [
        "de13fa2d-c8e7-47c2-b3c0-488d92ebd491"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "4.940699998289347",
      "content-length",
      "116",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 91
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "search_by_hash",
      "schema": "test",
      "table": "books",
      "hash_values": [
        "de13fa2d-c8e7-47c2-b3c0-488d92ebd491"
      ],
      "get_attributes": [
        "*"
      ]
    },
    "status": 200,
    "response": [
      {
        "__createdtime__": 1646783908850,
        "__updatedtime__": 1646783908850,
        "age": 32,
        "created": null,
        "id": "de13fa2d-c8e7-47c2-b3c0-488d92ebd491",
        "name": "Doug"
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "1.2358999997377396",
      "content-length",
      "149",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 140
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "sql",
      "sql": "select name, books.id from test.books as books where ((books.id = 'de13fa2d-c8e7-47c2-b3c0-488d92ebd491')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "name": "Doug",
        "id": "de13fa2d-c8e7-47c2-b3c0-488d92ebd491"
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "5.636600002646446",
      "content-length",
      "61",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 163
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "update",
      "schema": "test",
      "table": "books",
      "records": [
        {
          "name": "Dougler",
          "id": "de13fa2d-c8e7-47c2-b3c0-488d92ebd491"
        }
      ]
    },
    "status": 200,
    "response": {
      "message": "updated 1 of 1 records",
      "update_hashes": [
        "de13fa2d-c8e7-47c2-b3c0-488d92ebd491"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "6.950899999588728",
      "content-length",
      "113",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 129
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "sql",
      "sql": "select name, books.id from test.books as books where ((books.id = 'de13fa2d-c8e7-47c2-b3c0-488d92ebd491')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "name": "Dougler",
        "id": "de13fa2d-c8e7-47c2-b3c0-488d92ebd491"
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "4.76069999858737",
      "content-length",
      "64",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 163
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "sql",
      "sql": "select books.* from test.books as books where ((books.id = 'de13fa2d-c8e7-47c2-b3c0-488d92ebd491')) order by __createdtime__ asc"
    },
    "status": 200,
    "response": [
      {
        "created": null,
        "id": "de13fa2d-c8e7-47c2-b3c0-488d92ebd491",
        "name": "Dougler",
        "__createdtime__": 1646783908850,
        "__updatedtime__": 1646783908881,
        "age": 32
      }
    ],
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "8.242499999701977",
      "content-length",
      "152",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 156
    },
    "responseIsBinary": false
  },
  {
    "scope": "http://localhost:9925",
    "method": "POST",
    "path": "/",
    "body": {
      "operation": "delete",
      "schema": "test",
      "table": "books",
      "hash_values": [
        "de13fa2d-c8e7-47c2-b3c0-488d92ebd491"
      ]
    },
    "status": 200,
    "response": {
      "message": "1 of 1 record successfully deleted",
      "deleted_hashes": [
        "de13fa2d-c8e7-47c2-b3c0-488d92ebd491"
      ],
      "skipped_hashes": []
    },
    "rawHeaders": [
      "Content-Security-Policy",
      "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
      "X-DNS-Prefetch-Control",
      "off",
      "Expect-CT",
      "max-age=0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "Strict-Transport-Security",
      "max-age=15552000; includeSubDomains",
      "X-Download-Options",
      "noopen",
      "X-Content-Type-Options",
      "nosniff",
      "X-Permitted-Cross-Domain-Policies",
      "none",
      "Referrer-Policy",
      "no-referrer",
      "X-XSS-Protection",
      "0",
      "vary",
      "Origin",
      "vary",
      "accept-encoding",
      "access-control-allow-origin",
      "",
      "content-type",
      "application/json; charset=utf-8",
      "hdb-response-time",
      "4.774400003254414",
      "content-length",
      "126",
      "Date",
      "Tue, 08 Mar 2022 23:58:28 GMT",
      "Connection",
      "close"
    ],
    "reqheaders": {
      "content-type": "application/json",
      "authorization": "Basic YWRtaW46cGFzc3dvcmQ=",
      "host": "localhost:9925",
      "content-length": 109
    },
    "responseIsBinary": false
  }
]);
};