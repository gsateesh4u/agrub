(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ItemCategory
 * @header lbServices.ItemCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ItemCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ItemCategory",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ItemCategories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use ItemCategory.items.findById() instead.
        "prototype$__findById__items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ItemCategories/:id/items/:fk",
          method: "GET"
        },

        // INTERNAL. Use ItemCategory.items.destroyById() instead.
        "prototype$__destroyById__items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ItemCategories/:id/items/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ItemCategory.items.updateById() instead.
        "prototype$__updateById__items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ItemCategories/:id/items/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ItemCategory.hub() instead.
        "prototype$__get__hub": {
          url: urlBase + "/ItemCategories/:id/hub",
          method: "GET"
        },

        // INTERNAL. Use ItemCategory.items() instead.
        "prototype$__get__items": {
          isArray: true,
          url: urlBase + "/ItemCategories/:id/items",
          method: "GET"
        },

        // INTERNAL. Use ItemCategory.items.create() instead.
        "prototype$__create__items": {
          url: urlBase + "/ItemCategories/:id/items",
          method: "POST"
        },

        // INTERNAL. Use ItemCategory.items.destroyAll() instead.
        "prototype$__delete__items": {
          url: urlBase + "/ItemCategories/:id/items",
          method: "DELETE"
        },

        // INTERNAL. Use ItemCategory.items.count() instead.
        "prototype$__count__items": {
          url: urlBase + "/ItemCategories/:id/items/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#create
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ItemCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#createMany
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ItemCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#upsert
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ItemCategories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#exists
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ItemCategories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#findById
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ItemCategories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#find
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ItemCategories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#findOne
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ItemCategories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#updateAll
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/ItemCategories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#deleteById
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/ItemCategories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#count
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ItemCategories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#prototype$updateAttributes
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ItemCategories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#createChangeStream
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/ItemCategories/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Item.itemCategory() instead.
        "::get::Item::itemCategory": {
          url: urlBase + "/Items/:id/itemCategory",
          method: "GET"
        },

        // INTERNAL. Use Hub.itemCategories.findById() instead.
        "::findById::Hub::itemCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/itemCategories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Hub.itemCategories.destroyById() instead.
        "::destroyById::Hub::itemCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/itemCategories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Hub.itemCategories.updateById() instead.
        "::updateById::Hub::itemCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/itemCategories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Hub.itemCategories() instead.
        "::get::Hub::itemCategories": {
          isArray: true,
          url: urlBase + "/Hubs/:id/itemCategories",
          method: "GET"
        },

        // INTERNAL. Use Hub.itemCategories.create() instead.
        "::create::Hub::itemCategories": {
          url: urlBase + "/Hubs/:id/itemCategories",
          method: "POST"
        },

        // INTERNAL. Use Hub.itemCategories.createMany() instead.
        "::createMany::Hub::itemCategories": {
          isArray: true,
          url: urlBase + "/Hubs/:id/itemCategories",
          method: "POST"
        },

        // INTERNAL. Use Hub.itemCategories.destroyAll() instead.
        "::delete::Hub::itemCategories": {
          url: urlBase + "/Hubs/:id/itemCategories",
          method: "DELETE"
        },

        // INTERNAL. Use Hub.itemCategories.count() instead.
        "::count::Hub::itemCategories": {
          url: urlBase + "/Hubs/:id/itemCategories/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#updateOrCreate
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#update
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#destroyById
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#removeById
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ItemCategory#modelName
    * @propertyOf lbServices.ItemCategory
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ItemCategory`.
    */
    R.modelName = "ItemCategory";

    /**
     * @ngdoc object
     * @name lbServices.ItemCategory.items
     * @header lbServices.ItemCategory.items
     * @object
     * @description
     *
     * The object `ItemCategory.items` groups methods
     * manipulating `Item` instances related to `ItemCategory`.
     *
     * Call {@link lbServices.ItemCategory#items ItemCategory.items()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#items
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Queries items of ItemCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R.items = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::get::ItemCategory::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory.items#count
         * @methodOf lbServices.ItemCategory.items
         *
         * @description
         *
         * Counts items of ItemCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.items.count = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::count::ItemCategory::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory.items#create
         * @methodOf lbServices.ItemCategory.items
         *
         * @description
         *
         * Creates a new instance in items of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R.items.create = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::create::ItemCategory::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory.items#createMany
         * @methodOf lbServices.ItemCategory.items
         *
         * @description
         *
         * Creates a new instance in items of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R.items.createMany = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::createMany::ItemCategory::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory.items#destroyAll
         * @methodOf lbServices.ItemCategory.items
         *
         * @description
         *
         * Deletes all items of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.items.destroyAll = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::delete::ItemCategory::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory.items#destroyById
         * @methodOf lbServices.ItemCategory.items
         *
         * @description
         *
         * Delete a related item by id for items.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for items
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.items.destroyById = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::destroyById::ItemCategory::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory.items#findById
         * @methodOf lbServices.ItemCategory.items
         *
         * @description
         *
         * Find a related item by id for items.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for items
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R.items.findById = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::findById::ItemCategory::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory.items#updateById
         * @methodOf lbServices.ItemCategory.items
         *
         * @description
         *
         * Update a related item by id for items.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for items
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R.items.updateById = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::updateById::ItemCategory::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.ItemCategory#hub
         * @methodOf lbServices.ItemCategory
         *
         * @description
         *
         * Fetches belongsTo relation hub.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        R.hub = function() {
          var TargetResource = $injector.get("Hub");
          var action = TargetResource["::get::ItemCategory::hub"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Item
 * @header lbServices.Item
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Item` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Item",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Items/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Item.itemCategory() instead.
        "prototype$__get__itemCategory": {
          url: urlBase + "/Items/:id/itemCategory",
          method: "GET"
        },

        // INTERNAL. Use Item.hub() instead.
        "prototype$__get__hub": {
          url: urlBase + "/Items/:id/hub",
          method: "GET"
        },

        // INTERNAL. Use Item.itemPrices.findById() instead.
        "prototype$__findById__itemPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Items/:id/itemPrices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Item.itemPrices.destroyById() instead.
        "prototype$__destroyById__itemPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Items/:id/itemPrices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Item.itemPrices.updateById() instead.
        "prototype$__updateById__itemPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Items/:id/itemPrices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Item.itemPrices() instead.
        "prototype$__get__itemPrices": {
          isArray: true,
          url: urlBase + "/Items/:id/itemPrices",
          method: "GET"
        },

        // INTERNAL. Use Item.itemPrices.create() instead.
        "prototype$__create__itemPrices": {
          url: urlBase + "/Items/:id/itemPrices",
          method: "POST"
        },

        // INTERNAL. Use Item.itemPrices.destroyAll() instead.
        "prototype$__delete__itemPrices": {
          url: urlBase + "/Items/:id/itemPrices",
          method: "DELETE"
        },

        // INTERNAL. Use Item.itemPrices.count() instead.
        "prototype$__count__itemPrices": {
          url: urlBase + "/Items/:id/itemPrices/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#create
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Items",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#createMany
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Items",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#upsert
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Items",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#exists
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Items/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#findById
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Items/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#find
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Items",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#findOne
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Items/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#updateAll
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Items/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#deleteById
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Items/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#count
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Items/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#prototype$updateAttributes
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Items/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Item#createChangeStream
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Items/change-stream",
          method: "POST"
        },

        // INTERNAL. Use ItemCategory.items.findById() instead.
        "::findById::ItemCategory::items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ItemCategories/:id/items/:fk",
          method: "GET"
        },

        // INTERNAL. Use ItemCategory.items.destroyById() instead.
        "::destroyById::ItemCategory::items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ItemCategories/:id/items/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use ItemCategory.items.updateById() instead.
        "::updateById::ItemCategory::items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/ItemCategories/:id/items/:fk",
          method: "PUT"
        },

        // INTERNAL. Use ItemCategory.items() instead.
        "::get::ItemCategory::items": {
          isArray: true,
          url: urlBase + "/ItemCategories/:id/items",
          method: "GET"
        },

        // INTERNAL. Use ItemCategory.items.create() instead.
        "::create::ItemCategory::items": {
          url: urlBase + "/ItemCategories/:id/items",
          method: "POST"
        },

        // INTERNAL. Use ItemCategory.items.createMany() instead.
        "::createMany::ItemCategory::items": {
          isArray: true,
          url: urlBase + "/ItemCategories/:id/items",
          method: "POST"
        },

        // INTERNAL. Use ItemCategory.items.destroyAll() instead.
        "::delete::ItemCategory::items": {
          url: urlBase + "/ItemCategories/:id/items",
          method: "DELETE"
        },

        // INTERNAL. Use ItemCategory.items.count() instead.
        "::count::ItemCategory::items": {
          url: urlBase + "/ItemCategories/:id/items/count",
          method: "GET"
        },

        // INTERNAL. Use SalesOrderLine.item() instead.
        "::get::SalesOrderLine::item": {
          url: urlBase + "/SalesOrderLines/:id/item",
          method: "GET"
        },

        // INTERNAL. Use Hub.items.findById() instead.
        "::findById::Hub::items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/items/:fk",
          method: "GET"
        },

        // INTERNAL. Use Hub.items.destroyById() instead.
        "::destroyById::Hub::items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/items/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Hub.items.updateById() instead.
        "::updateById::Hub::items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/items/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Hub.items() instead.
        "::get::Hub::items": {
          isArray: true,
          url: urlBase + "/Hubs/:id/items",
          method: "GET"
        },

        // INTERNAL. Use Hub.items.create() instead.
        "::create::Hub::items": {
          url: urlBase + "/Hubs/:id/items",
          method: "POST"
        },

        // INTERNAL. Use Hub.items.createMany() instead.
        "::createMany::Hub::items": {
          isArray: true,
          url: urlBase + "/Hubs/:id/items",
          method: "POST"
        },

        // INTERNAL. Use Hub.items.destroyAll() instead.
        "::delete::Hub::items": {
          url: urlBase + "/Hubs/:id/items",
          method: "DELETE"
        },

        // INTERNAL. Use Hub.items.count() instead.
        "::count::Hub::items": {
          url: urlBase + "/Hubs/:id/items/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Item#updateOrCreate
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Item#update
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Item#destroyById
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Item#removeById
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Item#modelName
    * @propertyOf lbServices.Item
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Item`.
    */
    R.modelName = "Item";


        /**
         * @ngdoc method
         * @name lbServices.Item#itemCategory
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Fetches belongsTo relation itemCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        R.itemCategory = function() {
          var TargetResource = $injector.get("ItemCategory");
          var action = TargetResource["::get::Item::itemCategory"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item#hub
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Fetches belongsTo relation hub.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        R.hub = function() {
          var TargetResource = $injector.get("Hub");
          var action = TargetResource["::get::Item::hub"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Item.itemPrices
     * @header lbServices.Item.itemPrices
     * @object
     * @description
     *
     * The object `Item.itemPrices` groups methods
     * manipulating `ItemPrice` instances related to `Item`.
     *
     * Call {@link lbServices.Item#itemPrices Item.itemPrices()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Item#itemPrices
         * @methodOf lbServices.Item
         *
         * @description
         *
         * Queries itemPrices of Item.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        R.itemPrices = function() {
          var TargetResource = $injector.get("ItemPrice");
          var action = TargetResource["::get::Item::itemPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.itemPrices#count
         * @methodOf lbServices.Item.itemPrices
         *
         * @description
         *
         * Counts itemPrices of Item.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.itemPrices.count = function() {
          var TargetResource = $injector.get("ItemPrice");
          var action = TargetResource["::count::Item::itemPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.itemPrices#create
         * @methodOf lbServices.Item.itemPrices
         *
         * @description
         *
         * Creates a new instance in itemPrices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        R.itemPrices.create = function() {
          var TargetResource = $injector.get("ItemPrice");
          var action = TargetResource["::create::Item::itemPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.itemPrices#createMany
         * @methodOf lbServices.Item.itemPrices
         *
         * @description
         *
         * Creates a new instance in itemPrices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        R.itemPrices.createMany = function() {
          var TargetResource = $injector.get("ItemPrice");
          var action = TargetResource["::createMany::Item::itemPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.itemPrices#destroyAll
         * @methodOf lbServices.Item.itemPrices
         *
         * @description
         *
         * Deletes all itemPrices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.itemPrices.destroyAll = function() {
          var TargetResource = $injector.get("ItemPrice");
          var action = TargetResource["::delete::Item::itemPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.itemPrices#destroyById
         * @methodOf lbServices.Item.itemPrices
         *
         * @description
         *
         * Delete a related item by id for itemPrices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for itemPrices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.itemPrices.destroyById = function() {
          var TargetResource = $injector.get("ItemPrice");
          var action = TargetResource["::destroyById::Item::itemPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.itemPrices#findById
         * @methodOf lbServices.Item.itemPrices
         *
         * @description
         *
         * Find a related item by id for itemPrices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for itemPrices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        R.itemPrices.findById = function() {
          var TargetResource = $injector.get("ItemPrice");
          var action = TargetResource["::findById::Item::itemPrices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Item.itemPrices#updateById
         * @methodOf lbServices.Item.itemPrices
         *
         * @description
         *
         * Update a related item by id for itemPrices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for itemPrices
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        R.itemPrices.updateById = function() {
          var TargetResource = $injector.get("ItemPrice");
          var action = TargetResource["::updateById::Item::itemPrices"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Order
 * @header lbServices.Order
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Order` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Order",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Orders/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Order.salesOrders.findById() instead.
        "prototype$__findById__salesOrders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/salesOrders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Order.salesOrders.destroyById() instead.
        "prototype$__destroyById__salesOrders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/salesOrders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Order.salesOrders.updateById() instead.
        "prototype$__updateById__salesOrders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/salesOrders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Order.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/Orders/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use Order.orderStatus() instead.
        "prototype$__get__orderStatus": {
          url: urlBase + "/Orders/:id/orderStatus",
          method: "GET"
        },

        // INTERNAL. Use Order.orderStatus.create() instead.
        "prototype$__create__orderStatus": {
          url: urlBase + "/Orders/:id/orderStatus",
          method: "POST"
        },

        // INTERNAL. Use Order.orderStatus.update() instead.
        "prototype$__update__orderStatus": {
          url: urlBase + "/Orders/:id/orderStatus",
          method: "PUT"
        },

        // INTERNAL. Use Order.orderStatus.destroy() instead.
        "prototype$__destroy__orderStatus": {
          url: urlBase + "/Orders/:id/orderStatus",
          method: "DELETE"
        },

        // INTERNAL. Use Order.salesOrders() instead.
        "prototype$__get__salesOrders": {
          isArray: true,
          url: urlBase + "/Orders/:id/salesOrders",
          method: "GET"
        },

        // INTERNAL. Use Order.salesOrders.create() instead.
        "prototype$__create__salesOrders": {
          url: urlBase + "/Orders/:id/salesOrders",
          method: "POST"
        },

        // INTERNAL. Use Order.salesOrders.destroyAll() instead.
        "prototype$__delete__salesOrders": {
          url: urlBase + "/Orders/:id/salesOrders",
          method: "DELETE"
        },

        // INTERNAL. Use Order.salesOrders.count() instead.
        "prototype$__count__salesOrders": {
          url: urlBase + "/Orders/:id/salesOrders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#create
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Orders",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#createMany
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Orders",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#upsert
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Orders",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#exists
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Orders/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#findById
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Orders/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#find
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Orders",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#findOne
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Orders/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#updateAll
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Orders/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#deleteById
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Orders/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#count
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Orders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#prototype$updateAttributes
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Orders/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#createChangeStream
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Orders/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Order#placeOrder
         * @methodOf lbServices.Order
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `orderObj` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `orderObj` – `{object=}` - 
         */
        "placeOrder": {
          url: urlBase + "/Orders/placeOrder",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.order() instead.
        "::get::SalesOrder::order": {
          url: urlBase + "/SalesOrders/:id/order",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.findById() instead.
        "::findById::Customer::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.destroyById() instead.
        "::destroyById::Customer::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders.updateById() instead.
        "::updateById::Customer::orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.orders() instead.
        "::get::Customer::orders": {
          isArray: true,
          url: urlBase + "/Customers/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.create() instead.
        "::create::Customer::orders": {
          url: urlBase + "/Customers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Customer.orders.createMany() instead.
        "::createMany::Customer::orders": {
          isArray: true,
          url: urlBase + "/Customers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Customer.orders.destroyAll() instead.
        "::delete::Customer::orders": {
          url: urlBase + "/Customers/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders.count() instead.
        "::count::Customer::orders": {
          url: urlBase + "/Customers/:id/orders/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Order#updateOrCreate
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Order#update
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Order#destroyById
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Order#removeById
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Order#modelName
    * @propertyOf lbServices.Order
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Order`.
    */
    R.modelName = "Order";

    /**
     * @ngdoc object
     * @name lbServices.Order.salesOrders
     * @header lbServices.Order.salesOrders
     * @object
     * @description
     *
     * The object `Order.salesOrders` groups methods
     * manipulating `SalesOrder` instances related to `Order`.
     *
     * Call {@link lbServices.Order#salesOrders Order.salesOrders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Order#salesOrders
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Queries salesOrders of Order.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.salesOrders = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::get::Order::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.salesOrders#count
         * @methodOf lbServices.Order.salesOrders
         *
         * @description
         *
         * Counts salesOrders of Order.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.salesOrders.count = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::count::Order::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.salesOrders#create
         * @methodOf lbServices.Order.salesOrders
         *
         * @description
         *
         * Creates a new instance in salesOrders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.salesOrders.create = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::create::Order::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.salesOrders#createMany
         * @methodOf lbServices.Order.salesOrders
         *
         * @description
         *
         * Creates a new instance in salesOrders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.salesOrders.createMany = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::createMany::Order::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.salesOrders#destroyAll
         * @methodOf lbServices.Order.salesOrders
         *
         * @description
         *
         * Deletes all salesOrders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.salesOrders.destroyAll = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::delete::Order::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.salesOrders#destroyById
         * @methodOf lbServices.Order.salesOrders
         *
         * @description
         *
         * Delete a related item by id for salesOrders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for salesOrders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.salesOrders.destroyById = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::destroyById::Order::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.salesOrders#findById
         * @methodOf lbServices.Order.salesOrders
         *
         * @description
         *
         * Find a related item by id for salesOrders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for salesOrders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.salesOrders.findById = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::findById::Order::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.salesOrders#updateById
         * @methodOf lbServices.Order.salesOrders
         *
         * @description
         *
         * Update a related item by id for salesOrders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for salesOrders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.salesOrders.updateById = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::updateById::Order::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order#customer
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Order::customer"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Order.orderStatus
     * @header lbServices.Order.orderStatus
     * @object
     * @description
     *
     * The object `Order.orderStatus` groups methods
     * manipulating `OrderStatus` instances related to `Order`.
     *
     * Call {@link lbServices.Order#orderStatus Order.orderStatus()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Order#orderStatus
         * @methodOf lbServices.Order
         *
         * @description
         *
         * Fetches hasOne relation orderStatus.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        R.orderStatus = function() {
          var TargetResource = $injector.get("OrderStatus");
          var action = TargetResource["::get::Order::orderStatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.orderStatus#create
         * @methodOf lbServices.Order.orderStatus
         *
         * @description
         *
         * Creates a new instance in orderStatus of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        R.orderStatus.create = function() {
          var TargetResource = $injector.get("OrderStatus");
          var action = TargetResource["::create::Order::orderStatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.orderStatus#createMany
         * @methodOf lbServices.Order.orderStatus
         *
         * @description
         *
         * Creates a new instance in orderStatus of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        R.orderStatus.createMany = function() {
          var TargetResource = $injector.get("OrderStatus");
          var action = TargetResource["::createMany::Order::orderStatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.orderStatus#destroy
         * @methodOf lbServices.Order.orderStatus
         *
         * @description
         *
         * Deletes orderStatus of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orderStatus.destroy = function() {
          var TargetResource = $injector.get("OrderStatus");
          var action = TargetResource["::destroy::Order::orderStatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Order.orderStatus#update
         * @methodOf lbServices.Order.orderStatus
         *
         * @description
         *
         * Update orderStatus of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        R.orderStatus.update = function() {
          var TargetResource = $injector.get("OrderStatus");
          var action = TargetResource["::update::Order::orderStatus"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.SalesOrder
 * @header lbServices.SalesOrder
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SalesOrder` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SalesOrder",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SalesOrders/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use SalesOrder.order() instead.
        "prototype$__get__order": {
          url: urlBase + "/SalesOrders/:id/order",
          method: "GET"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.findById() instead.
        "prototype$__findById__salesOrderLines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SalesOrders/:id/salesOrderLines/:fk",
          method: "GET"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.destroyById() instead.
        "prototype$__destroyById__salesOrderLines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SalesOrders/:id/salesOrderLines/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.updateById() instead.
        "prototype$__updateById__salesOrderLines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SalesOrders/:id/salesOrderLines/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SalesOrder.deliveryChalan() instead.
        "prototype$__get__deliveryChalan": {
          url: urlBase + "/SalesOrders/:id/deliveryChalan",
          method: "GET"
        },

        // INTERNAL. Use SalesOrder.deliveryChalan.create() instead.
        "prototype$__create__deliveryChalan": {
          url: urlBase + "/SalesOrders/:id/deliveryChalan",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.deliveryChalan.update() instead.
        "prototype$__update__deliveryChalan": {
          url: urlBase + "/SalesOrders/:id/deliveryChalan",
          method: "PUT"
        },

        // INTERNAL. Use SalesOrder.deliveryChalan.destroy() instead.
        "prototype$__destroy__deliveryChalan": {
          url: urlBase + "/SalesOrders/:id/deliveryChalan",
          method: "DELETE"
        },

        // INTERNAL. Use SalesOrder.salesOrderStatus() instead.
        "prototype$__get__salesOrderStatus": {
          url: urlBase + "/SalesOrders/:id/salesOrderStatus",
          method: "GET"
        },

        // INTERNAL. Use SalesOrder.salesOrderStatus.create() instead.
        "prototype$__create__salesOrderStatus": {
          url: urlBase + "/SalesOrders/:id/salesOrderStatus",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.salesOrderStatus.update() instead.
        "prototype$__update__salesOrderStatus": {
          url: urlBase + "/SalesOrders/:id/salesOrderStatus",
          method: "PUT"
        },

        // INTERNAL. Use SalesOrder.salesOrderStatus.destroy() instead.
        "prototype$__destroy__salesOrderStatus": {
          url: urlBase + "/SalesOrders/:id/salesOrderStatus",
          method: "DELETE"
        },

        // INTERNAL. Use SalesOrder.invoice() instead.
        "prototype$__get__invoice": {
          url: urlBase + "/SalesOrders/:id/invoice",
          method: "GET"
        },

        // INTERNAL. Use SalesOrder.invoice.create() instead.
        "prototype$__create__invoice": {
          url: urlBase + "/SalesOrders/:id/invoice",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.invoice.update() instead.
        "prototype$__update__invoice": {
          url: urlBase + "/SalesOrders/:id/invoice",
          method: "PUT"
        },

        // INTERNAL. Use SalesOrder.invoice.destroy() instead.
        "prototype$__destroy__invoice": {
          url: urlBase + "/SalesOrders/:id/invoice",
          method: "DELETE"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines() instead.
        "prototype$__get__salesOrderLines": {
          isArray: true,
          url: urlBase + "/SalesOrders/:id/salesOrderLines",
          method: "GET"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.create() instead.
        "prototype$__create__salesOrderLines": {
          url: urlBase + "/SalesOrders/:id/salesOrderLines",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.destroyAll() instead.
        "prototype$__delete__salesOrderLines": {
          url: urlBase + "/SalesOrders/:id/salesOrderLines",
          method: "DELETE"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.count() instead.
        "prototype$__count__salesOrderLines": {
          url: urlBase + "/SalesOrders/:id/salesOrderLines/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#create
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SalesOrders",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#createMany
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/SalesOrders",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#upsert
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SalesOrders",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#exists
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/SalesOrders/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#findById
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SalesOrders/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#find
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SalesOrders",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#findOne
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SalesOrders/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#updateAll
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/SalesOrders/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#deleteById
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/SalesOrders/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#count
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/SalesOrders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#prototype$updateAttributes
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SalesOrders/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#createChangeStream
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/SalesOrders/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Order.salesOrders.findById() instead.
        "::findById::Order::salesOrders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/salesOrders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Order.salesOrders.destroyById() instead.
        "::destroyById::Order::salesOrders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/salesOrders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Order.salesOrders.updateById() instead.
        "::updateById::Order::salesOrders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Orders/:id/salesOrders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Order.salesOrders() instead.
        "::get::Order::salesOrders": {
          isArray: true,
          url: urlBase + "/Orders/:id/salesOrders",
          method: "GET"
        },

        // INTERNAL. Use Order.salesOrders.create() instead.
        "::create::Order::salesOrders": {
          url: urlBase + "/Orders/:id/salesOrders",
          method: "POST"
        },

        // INTERNAL. Use Order.salesOrders.createMany() instead.
        "::createMany::Order::salesOrders": {
          isArray: true,
          url: urlBase + "/Orders/:id/salesOrders",
          method: "POST"
        },

        // INTERNAL. Use Order.salesOrders.destroyAll() instead.
        "::delete::Order::salesOrders": {
          url: urlBase + "/Orders/:id/salesOrders",
          method: "DELETE"
        },

        // INTERNAL. Use Order.salesOrders.count() instead.
        "::count::Order::salesOrders": {
          url: urlBase + "/Orders/:id/salesOrders/count",
          method: "GET"
        },

        // INTERNAL. Use SalesOrderLine.salesOrder() instead.
        "::get::SalesOrderLine::salesOrder": {
          url: urlBase + "/SalesOrderLines/:id/salesOrder",
          method: "GET"
        },

        // INTERNAL. Use DeliveryChalan.purchaseOrder() instead.
        "::get::DeliveryChalan::purchaseOrder": {
          url: urlBase + "/DeliveryChalans/:id/purchaseOrder",
          method: "GET"
        },

        // INTERNAL. Use Customer.salesOrders.findById() instead.
        "::findById::Customer::salesOrders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/salesOrders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.salesOrders.destroyById() instead.
        "::destroyById::Customer::salesOrders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/salesOrders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.salesOrders.updateById() instead.
        "::updateById::Customer::salesOrders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/salesOrders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.salesOrders() instead.
        "::get::Customer::salesOrders": {
          isArray: true,
          url: urlBase + "/Customers/:id/salesOrders",
          method: "GET"
        },

        // INTERNAL. Use Customer.salesOrders.create() instead.
        "::create::Customer::salesOrders": {
          url: urlBase + "/Customers/:id/salesOrders",
          method: "POST"
        },

        // INTERNAL. Use Customer.salesOrders.createMany() instead.
        "::createMany::Customer::salesOrders": {
          isArray: true,
          url: urlBase + "/Customers/:id/salesOrders",
          method: "POST"
        },

        // INTERNAL. Use Customer.salesOrders.destroyAll() instead.
        "::delete::Customer::salesOrders": {
          url: urlBase + "/Customers/:id/salesOrders",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.salesOrders.count() instead.
        "::count::Customer::salesOrders": {
          url: urlBase + "/Customers/:id/salesOrders/count",
          method: "GET"
        },

        // INTERNAL. Use Invoice.salesOrder() instead.
        "::get::Invoice::salesOrder": {
          url: urlBase + "/Invoices/:id/salesOrder",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#updateOrCreate
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#update
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#destroyById
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#removeById
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.SalesOrder#modelName
    * @propertyOf lbServices.SalesOrder
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SalesOrder`.
    */
    R.modelName = "SalesOrder";


        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#order
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Fetches belongsTo relation order.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.order = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::SalesOrder::order"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SalesOrder.salesOrderLines
     * @header lbServices.SalesOrder.salesOrderLines
     * @object
     * @description
     *
     * The object `SalesOrder.salesOrderLines` groups methods
     * manipulating `SalesOrderLine` instances related to `SalesOrder`.
     *
     * Call {@link lbServices.SalesOrder#salesOrderLines SalesOrder.salesOrderLines()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#salesOrderLines
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Queries salesOrderLines of SalesOrder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        R.salesOrderLines = function() {
          var TargetResource = $injector.get("SalesOrderLine");
          var action = TargetResource["::get::SalesOrder::salesOrderLines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.salesOrderLines#count
         * @methodOf lbServices.SalesOrder.salesOrderLines
         *
         * @description
         *
         * Counts salesOrderLines of SalesOrder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.salesOrderLines.count = function() {
          var TargetResource = $injector.get("SalesOrderLine");
          var action = TargetResource["::count::SalesOrder::salesOrderLines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.salesOrderLines#create
         * @methodOf lbServices.SalesOrder.salesOrderLines
         *
         * @description
         *
         * Creates a new instance in salesOrderLines of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        R.salesOrderLines.create = function() {
          var TargetResource = $injector.get("SalesOrderLine");
          var action = TargetResource["::create::SalesOrder::salesOrderLines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.salesOrderLines#createMany
         * @methodOf lbServices.SalesOrder.salesOrderLines
         *
         * @description
         *
         * Creates a new instance in salesOrderLines of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        R.salesOrderLines.createMany = function() {
          var TargetResource = $injector.get("SalesOrderLine");
          var action = TargetResource["::createMany::SalesOrder::salesOrderLines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.salesOrderLines#destroyAll
         * @methodOf lbServices.SalesOrder.salesOrderLines
         *
         * @description
         *
         * Deletes all salesOrderLines of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.salesOrderLines.destroyAll = function() {
          var TargetResource = $injector.get("SalesOrderLine");
          var action = TargetResource["::delete::SalesOrder::salesOrderLines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.salesOrderLines#destroyById
         * @methodOf lbServices.SalesOrder.salesOrderLines
         *
         * @description
         *
         * Delete a related item by id for salesOrderLines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for salesOrderLines
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.salesOrderLines.destroyById = function() {
          var TargetResource = $injector.get("SalesOrderLine");
          var action = TargetResource["::destroyById::SalesOrder::salesOrderLines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.salesOrderLines#findById
         * @methodOf lbServices.SalesOrder.salesOrderLines
         *
         * @description
         *
         * Find a related item by id for salesOrderLines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for salesOrderLines
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        R.salesOrderLines.findById = function() {
          var TargetResource = $injector.get("SalesOrderLine");
          var action = TargetResource["::findById::SalesOrder::salesOrderLines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.salesOrderLines#updateById
         * @methodOf lbServices.SalesOrder.salesOrderLines
         *
         * @description
         *
         * Update a related item by id for salesOrderLines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for salesOrderLines
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        R.salesOrderLines.updateById = function() {
          var TargetResource = $injector.get("SalesOrderLine");
          var action = TargetResource["::updateById::SalesOrder::salesOrderLines"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SalesOrder.deliveryChalan
     * @header lbServices.SalesOrder.deliveryChalan
     * @object
     * @description
     *
     * The object `SalesOrder.deliveryChalan` groups methods
     * manipulating `DeliveryChalan` instances related to `SalesOrder`.
     *
     * Call {@link lbServices.SalesOrder#deliveryChalan SalesOrder.deliveryChalan()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#deliveryChalan
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Fetches hasOne relation deliveryChalan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R.deliveryChalan = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::get::SalesOrder::deliveryChalan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.deliveryChalan#create
         * @methodOf lbServices.SalesOrder.deliveryChalan
         *
         * @description
         *
         * Creates a new instance in deliveryChalan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R.deliveryChalan.create = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::create::SalesOrder::deliveryChalan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.deliveryChalan#createMany
         * @methodOf lbServices.SalesOrder.deliveryChalan
         *
         * @description
         *
         * Creates a new instance in deliveryChalan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R.deliveryChalan.createMany = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::createMany::SalesOrder::deliveryChalan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.deliveryChalan#destroy
         * @methodOf lbServices.SalesOrder.deliveryChalan
         *
         * @description
         *
         * Deletes deliveryChalan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.deliveryChalan.destroy = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::destroy::SalesOrder::deliveryChalan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.deliveryChalan#update
         * @methodOf lbServices.SalesOrder.deliveryChalan
         *
         * @description
         *
         * Update deliveryChalan of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R.deliveryChalan.update = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::update::SalesOrder::deliveryChalan"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SalesOrder.salesOrderStatus
     * @header lbServices.SalesOrder.salesOrderStatus
     * @object
     * @description
     *
     * The object `SalesOrder.salesOrderStatus` groups methods
     * manipulating `SalesOrderStatus` instances related to `SalesOrder`.
     *
     * Call {@link lbServices.SalesOrder#salesOrderStatus SalesOrder.salesOrderStatus()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#salesOrderStatus
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Fetches hasOne relation salesOrderStatus.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        R.salesOrderStatus = function() {
          var TargetResource = $injector.get("SalesOrderStatus");
          var action = TargetResource["::get::SalesOrder::salesOrderStatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.salesOrderStatus#create
         * @methodOf lbServices.SalesOrder.salesOrderStatus
         *
         * @description
         *
         * Creates a new instance in salesOrderStatus of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        R.salesOrderStatus.create = function() {
          var TargetResource = $injector.get("SalesOrderStatus");
          var action = TargetResource["::create::SalesOrder::salesOrderStatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.salesOrderStatus#createMany
         * @methodOf lbServices.SalesOrder.salesOrderStatus
         *
         * @description
         *
         * Creates a new instance in salesOrderStatus of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        R.salesOrderStatus.createMany = function() {
          var TargetResource = $injector.get("SalesOrderStatus");
          var action = TargetResource["::createMany::SalesOrder::salesOrderStatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.salesOrderStatus#destroy
         * @methodOf lbServices.SalesOrder.salesOrderStatus
         *
         * @description
         *
         * Deletes salesOrderStatus of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.salesOrderStatus.destroy = function() {
          var TargetResource = $injector.get("SalesOrderStatus");
          var action = TargetResource["::destroy::SalesOrder::salesOrderStatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.salesOrderStatus#update
         * @methodOf lbServices.SalesOrder.salesOrderStatus
         *
         * @description
         *
         * Update salesOrderStatus of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        R.salesOrderStatus.update = function() {
          var TargetResource = $injector.get("SalesOrderStatus");
          var action = TargetResource["::update::SalesOrder::salesOrderStatus"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.SalesOrder.invoice
     * @header lbServices.SalesOrder.invoice
     * @object
     * @description
     *
     * The object `SalesOrder.invoice` groups methods
     * manipulating `Invoice` instances related to `SalesOrder`.
     *
     * Call {@link lbServices.SalesOrder#invoice SalesOrder.invoice()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.SalesOrder#invoice
         * @methodOf lbServices.SalesOrder
         *
         * @description
         *
         * Fetches hasOne relation invoice.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoice = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::get::SalesOrder::invoice"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.invoice#create
         * @methodOf lbServices.SalesOrder.invoice
         *
         * @description
         *
         * Creates a new instance in invoice of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoice.create = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::create::SalesOrder::invoice"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.invoice#createMany
         * @methodOf lbServices.SalesOrder.invoice
         *
         * @description
         *
         * Creates a new instance in invoice of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoice.createMany = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::createMany::SalesOrder::invoice"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.invoice#destroy
         * @methodOf lbServices.SalesOrder.invoice
         *
         * @description
         *
         * Deletes invoice of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.invoice.destroy = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::destroy::SalesOrder::invoice"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrder.invoice#update
         * @methodOf lbServices.SalesOrder.invoice
         *
         * @description
         *
         * Update invoice of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoice.update = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::update::SalesOrder::invoice"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.SalesOrderLine
 * @header lbServices.SalesOrderLine
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SalesOrderLine` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SalesOrderLine",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SalesOrderLines/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use SalesOrderLine.salesOrder() instead.
        "prototype$__get__salesOrder": {
          url: urlBase + "/SalesOrderLines/:id/salesOrder",
          method: "GET"
        },

        // INTERNAL. Use SalesOrderLine.item() instead.
        "prototype$__get__item": {
          url: urlBase + "/SalesOrderLines/:id/item",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#create
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SalesOrderLines",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#createMany
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/SalesOrderLines",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#upsert
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SalesOrderLines",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#exists
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/SalesOrderLines/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#findById
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SalesOrderLines/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#find
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SalesOrderLines",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#findOne
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SalesOrderLines/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#updateAll
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/SalesOrderLines/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#deleteById
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/SalesOrderLines/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#count
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/SalesOrderLines/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#prototype$updateAttributes
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SalesOrderLines/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#createChangeStream
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/SalesOrderLines/change-stream",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.findById() instead.
        "::findById::SalesOrder::salesOrderLines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SalesOrders/:id/salesOrderLines/:fk",
          method: "GET"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.destroyById() instead.
        "::destroyById::SalesOrder::salesOrderLines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SalesOrders/:id/salesOrderLines/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.updateById() instead.
        "::updateById::SalesOrder::salesOrderLines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/SalesOrders/:id/salesOrderLines/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines() instead.
        "::get::SalesOrder::salesOrderLines": {
          isArray: true,
          url: urlBase + "/SalesOrders/:id/salesOrderLines",
          method: "GET"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.create() instead.
        "::create::SalesOrder::salesOrderLines": {
          url: urlBase + "/SalesOrders/:id/salesOrderLines",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.createMany() instead.
        "::createMany::SalesOrder::salesOrderLines": {
          isArray: true,
          url: urlBase + "/SalesOrders/:id/salesOrderLines",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.destroyAll() instead.
        "::delete::SalesOrder::salesOrderLines": {
          url: urlBase + "/SalesOrders/:id/salesOrderLines",
          method: "DELETE"
        },

        // INTERNAL. Use SalesOrder.salesOrderLines.count() instead.
        "::count::SalesOrder::salesOrderLines": {
          url: urlBase + "/SalesOrders/:id/salesOrderLines/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#updateOrCreate
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#update
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#destroyById
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#removeById
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderLine` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.SalesOrderLine#modelName
    * @propertyOf lbServices.SalesOrderLine
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SalesOrderLine`.
    */
    R.modelName = "SalesOrderLine";


        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#salesOrder
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Fetches belongsTo relation salesOrder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.salesOrder = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::get::SalesOrderLine::salesOrder"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderLine#item
         * @methodOf lbServices.SalesOrderLine
         *
         * @description
         *
         * Fetches belongsTo relation item.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R.item = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::get::SalesOrderLine::item"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.DeliveryChalan
 * @header lbServices.DeliveryChalan
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DeliveryChalan` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "DeliveryChalan",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/DeliveryChalans/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use DeliveryChalan.purchaseOrder() instead.
        "prototype$__get__purchaseOrder": {
          url: urlBase + "/DeliveryChalans/:id/purchaseOrder",
          method: "GET"
        },

        // INTERNAL. Use DeliveryChalan.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/DeliveryChalans/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use DeliveryChalan.deliveryChalanStatus() instead.
        "prototype$__get__deliveryChalanStatus": {
          url: urlBase + "/DeliveryChalans/:id/deliveryChalanStatus",
          method: "GET"
        },

        // INTERNAL. Use DeliveryChalan.deliveryChalanStatus.create() instead.
        "prototype$__create__deliveryChalanStatus": {
          url: urlBase + "/DeliveryChalans/:id/deliveryChalanStatus",
          method: "POST"
        },

        // INTERNAL. Use DeliveryChalan.deliveryChalanStatus.update() instead.
        "prototype$__update__deliveryChalanStatus": {
          url: urlBase + "/DeliveryChalans/:id/deliveryChalanStatus",
          method: "PUT"
        },

        // INTERNAL. Use DeliveryChalan.deliveryChalanStatus.destroy() instead.
        "prototype$__destroy__deliveryChalanStatus": {
          url: urlBase + "/DeliveryChalans/:id/deliveryChalanStatus",
          method: "DELETE"
        },

        // INTERNAL. Use DeliveryChalan.invoice() instead.
        "prototype$__get__invoice": {
          url: urlBase + "/DeliveryChalans/:id/invoice",
          method: "GET"
        },

        // INTERNAL. Use DeliveryChalan.invoice.create() instead.
        "prototype$__create__invoice": {
          url: urlBase + "/DeliveryChalans/:id/invoice",
          method: "POST"
        },

        // INTERNAL. Use DeliveryChalan.invoice.update() instead.
        "prototype$__update__invoice": {
          url: urlBase + "/DeliveryChalans/:id/invoice",
          method: "PUT"
        },

        // INTERNAL. Use DeliveryChalan.invoice.destroy() instead.
        "prototype$__destroy__invoice": {
          url: urlBase + "/DeliveryChalans/:id/invoice",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#create
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/DeliveryChalans",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#createMany
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/DeliveryChalans",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#upsert
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/DeliveryChalans",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#exists
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/DeliveryChalans/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#findById
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/DeliveryChalans/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#find
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/DeliveryChalans",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#findOne
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/DeliveryChalans/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#updateAll
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/DeliveryChalans/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#deleteById
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/DeliveryChalans/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#count
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/DeliveryChalans/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#prototype$updateAttributes
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/DeliveryChalans/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#createChangeStream
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/DeliveryChalans/change-stream",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.deliveryChalan() instead.
        "::get::SalesOrder::deliveryChalan": {
          url: urlBase + "/SalesOrders/:id/deliveryChalan",
          method: "GET"
        },

        // INTERNAL. Use SalesOrder.deliveryChalan.create() instead.
        "::create::SalesOrder::deliveryChalan": {
          url: urlBase + "/SalesOrders/:id/deliveryChalan",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.deliveryChalan.createMany() instead.
        "::createMany::SalesOrder::deliveryChalan": {
          isArray: true,
          url: urlBase + "/SalesOrders/:id/deliveryChalan",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.deliveryChalan.update() instead.
        "::update::SalesOrder::deliveryChalan": {
          url: urlBase + "/SalesOrders/:id/deliveryChalan",
          method: "PUT"
        },

        // INTERNAL. Use SalesOrder.deliveryChalan.destroy() instead.
        "::destroy::SalesOrder::deliveryChalan": {
          url: urlBase + "/SalesOrders/:id/deliveryChalan",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.deliveryChalans.findById() instead.
        "::findById::Customer::deliveryChalans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/deliveryChalans/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.deliveryChalans.destroyById() instead.
        "::destroyById::Customer::deliveryChalans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/deliveryChalans/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.deliveryChalans.updateById() instead.
        "::updateById::Customer::deliveryChalans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/deliveryChalans/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.deliveryChalans() instead.
        "::get::Customer::deliveryChalans": {
          isArray: true,
          url: urlBase + "/Customers/:id/deliveryChalans",
          method: "GET"
        },

        // INTERNAL. Use Customer.deliveryChalans.create() instead.
        "::create::Customer::deliveryChalans": {
          url: urlBase + "/Customers/:id/deliveryChalans",
          method: "POST"
        },

        // INTERNAL. Use Customer.deliveryChalans.createMany() instead.
        "::createMany::Customer::deliveryChalans": {
          isArray: true,
          url: urlBase + "/Customers/:id/deliveryChalans",
          method: "POST"
        },

        // INTERNAL. Use Customer.deliveryChalans.destroyAll() instead.
        "::delete::Customer::deliveryChalans": {
          url: urlBase + "/Customers/:id/deliveryChalans",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.deliveryChalans.count() instead.
        "::count::Customer::deliveryChalans": {
          url: urlBase + "/Customers/:id/deliveryChalans/count",
          method: "GET"
        },

        // INTERNAL. Use Invoice.deliveryChalan() instead.
        "::get::Invoice::deliveryChalan": {
          url: urlBase + "/Invoices/:id/deliveryChalan",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#updateOrCreate
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#update
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#destroyById
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#removeById
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.DeliveryChalan#modelName
    * @propertyOf lbServices.DeliveryChalan
    * @description
    * The name of the model represented by this $resource,
    * i.e. `DeliveryChalan`.
    */
    R.modelName = "DeliveryChalan";


        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#purchaseOrder
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Fetches belongsTo relation purchaseOrder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.purchaseOrder = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::get::DeliveryChalan::purchaseOrder"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#customer
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::DeliveryChalan::customer"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.DeliveryChalan.deliveryChalanStatus
     * @header lbServices.DeliveryChalan.deliveryChalanStatus
     * @object
     * @description
     *
     * The object `DeliveryChalan.deliveryChalanStatus` groups methods
     * manipulating `DeliveryChalanStatus` instances related to `DeliveryChalan`.
     *
     * Call {@link lbServices.DeliveryChalan#deliveryChalanStatus DeliveryChalan.deliveryChalanStatus()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#deliveryChalanStatus
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Fetches hasOne relation deliveryChalanStatus.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        R.deliveryChalanStatus = function() {
          var TargetResource = $injector.get("DeliveryChalanStatus");
          var action = TargetResource["::get::DeliveryChalan::deliveryChalanStatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan.deliveryChalanStatus#create
         * @methodOf lbServices.DeliveryChalan.deliveryChalanStatus
         *
         * @description
         *
         * Creates a new instance in deliveryChalanStatus of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        R.deliveryChalanStatus.create = function() {
          var TargetResource = $injector.get("DeliveryChalanStatus");
          var action = TargetResource["::create::DeliveryChalan::deliveryChalanStatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan.deliveryChalanStatus#createMany
         * @methodOf lbServices.DeliveryChalan.deliveryChalanStatus
         *
         * @description
         *
         * Creates a new instance in deliveryChalanStatus of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        R.deliveryChalanStatus.createMany = function() {
          var TargetResource = $injector.get("DeliveryChalanStatus");
          var action = TargetResource["::createMany::DeliveryChalan::deliveryChalanStatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan.deliveryChalanStatus#destroy
         * @methodOf lbServices.DeliveryChalan.deliveryChalanStatus
         *
         * @description
         *
         * Deletes deliveryChalanStatus of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.deliveryChalanStatus.destroy = function() {
          var TargetResource = $injector.get("DeliveryChalanStatus");
          var action = TargetResource["::destroy::DeliveryChalan::deliveryChalanStatus"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan.deliveryChalanStatus#update
         * @methodOf lbServices.DeliveryChalan.deliveryChalanStatus
         *
         * @description
         *
         * Update deliveryChalanStatus of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        R.deliveryChalanStatus.update = function() {
          var TargetResource = $injector.get("DeliveryChalanStatus");
          var action = TargetResource["::update::DeliveryChalan::deliveryChalanStatus"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.DeliveryChalan.invoice
     * @header lbServices.DeliveryChalan.invoice
     * @object
     * @description
     *
     * The object `DeliveryChalan.invoice` groups methods
     * manipulating `Invoice` instances related to `DeliveryChalan`.
     *
     * Call {@link lbServices.DeliveryChalan#invoice DeliveryChalan.invoice()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan#invoice
         * @methodOf lbServices.DeliveryChalan
         *
         * @description
         *
         * Fetches hasOne relation invoice.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoice = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::get::DeliveryChalan::invoice"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan.invoice#create
         * @methodOf lbServices.DeliveryChalan.invoice
         *
         * @description
         *
         * Creates a new instance in invoice of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoice.create = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::create::DeliveryChalan::invoice"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan.invoice#createMany
         * @methodOf lbServices.DeliveryChalan.invoice
         *
         * @description
         *
         * Creates a new instance in invoice of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoice.createMany = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::createMany::DeliveryChalan::invoice"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan.invoice#destroy
         * @methodOf lbServices.DeliveryChalan.invoice
         *
         * @description
         *
         * Deletes invoice of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.invoice.destroy = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::destroy::DeliveryChalan::invoice"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalan.invoice#update
         * @methodOf lbServices.DeliveryChalan.invoice
         *
         * @description
         *
         * Update invoice of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoice.update = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::update::DeliveryChalan::invoice"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Customer
 * @header lbServices.Customer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Customer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Customer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Customers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Customer.orders.findById() instead.
        "prototype$__findById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.destroyById() instead.
        "prototype$__destroyById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders.updateById() instead.
        "prototype$__updateById__orders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/orders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.salesOrders.findById() instead.
        "prototype$__findById__salesOrders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/salesOrders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.salesOrders.destroyById() instead.
        "prototype$__destroyById__salesOrders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/salesOrders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.salesOrders.updateById() instead.
        "prototype$__updateById__salesOrders": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/salesOrders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.deliveryChalans.findById() instead.
        "prototype$__findById__deliveryChalans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/deliveryChalans/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.deliveryChalans.destroyById() instead.
        "prototype$__destroyById__deliveryChalans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/deliveryChalans/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.deliveryChalans.updateById() instead.
        "prototype$__updateById__deliveryChalans": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/deliveryChalans/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.hub() instead.
        "prototype$__get__hub": {
          url: urlBase + "/Customers/:id/hub",
          method: "GET"
        },

        // INTERNAL. Use Customer.invoices.findById() instead.
        "prototype$__findById__invoices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/invoices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.invoices.destroyById() instead.
        "prototype$__destroyById__invoices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/invoices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.invoices.updateById() instead.
        "prototype$__updateById__invoices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/invoices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.pricing() instead.
        "prototype$__get__pricing": {
          url: urlBase + "/Customers/:id/pricing",
          method: "GET"
        },

        // INTERNAL. Use Customer.pricing.create() instead.
        "prototype$__create__pricing": {
          url: urlBase + "/Customers/:id/pricing",
          method: "POST"
        },

        // INTERNAL. Use Customer.pricing.update() instead.
        "prototype$__update__pricing": {
          url: urlBase + "/Customers/:id/pricing",
          method: "PUT"
        },

        // INTERNAL. Use Customer.pricing.destroy() instead.
        "prototype$__destroy__pricing": {
          url: urlBase + "/Customers/:id/pricing",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders() instead.
        "prototype$__get__orders": {
          isArray: true,
          url: urlBase + "/Customers/:id/orders",
          method: "GET"
        },

        // INTERNAL. Use Customer.orders.create() instead.
        "prototype$__create__orders": {
          url: urlBase + "/Customers/:id/orders",
          method: "POST"
        },

        // INTERNAL. Use Customer.orders.destroyAll() instead.
        "prototype$__delete__orders": {
          url: urlBase + "/Customers/:id/orders",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.orders.count() instead.
        "prototype$__count__orders": {
          url: urlBase + "/Customers/:id/orders/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.salesOrders() instead.
        "prototype$__get__salesOrders": {
          isArray: true,
          url: urlBase + "/Customers/:id/salesOrders",
          method: "GET"
        },

        // INTERNAL. Use Customer.salesOrders.create() instead.
        "prototype$__create__salesOrders": {
          url: urlBase + "/Customers/:id/salesOrders",
          method: "POST"
        },

        // INTERNAL. Use Customer.salesOrders.destroyAll() instead.
        "prototype$__delete__salesOrders": {
          url: urlBase + "/Customers/:id/salesOrders",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.salesOrders.count() instead.
        "prototype$__count__salesOrders": {
          url: urlBase + "/Customers/:id/salesOrders/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.deliveryChalans() instead.
        "prototype$__get__deliveryChalans": {
          isArray: true,
          url: urlBase + "/Customers/:id/deliveryChalans",
          method: "GET"
        },

        // INTERNAL. Use Customer.deliveryChalans.create() instead.
        "prototype$__create__deliveryChalans": {
          url: urlBase + "/Customers/:id/deliveryChalans",
          method: "POST"
        },

        // INTERNAL. Use Customer.deliveryChalans.destroyAll() instead.
        "prototype$__delete__deliveryChalans": {
          url: urlBase + "/Customers/:id/deliveryChalans",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.deliveryChalans.count() instead.
        "prototype$__count__deliveryChalans": {
          url: urlBase + "/Customers/:id/deliveryChalans/count",
          method: "GET"
        },

        // INTERNAL. Use Customer.invoices() instead.
        "prototype$__get__invoices": {
          isArray: true,
          url: urlBase + "/Customers/:id/invoices",
          method: "GET"
        },

        // INTERNAL. Use Customer.invoices.create() instead.
        "prototype$__create__invoices": {
          url: urlBase + "/Customers/:id/invoices",
          method: "POST"
        },

        // INTERNAL. Use Customer.invoices.destroyAll() instead.
        "prototype$__delete__invoices": {
          url: urlBase + "/Customers/:id/invoices",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.invoices.count() instead.
        "prototype$__count__invoices": {
          url: urlBase + "/Customers/:id/invoices/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#create
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Customers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#createMany
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Customers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#upsert
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Customers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#exists
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Customers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#findById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Customers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#find
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Customers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#findOne
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Customers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#updateAll
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Customers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#deleteById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Customers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#count
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Customers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#prototype$updateAttributes
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Customers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Customer#createChangeStream
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Customers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Order.customer() instead.
        "::get::Order::customer": {
          url: urlBase + "/Orders/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use DeliveryChalan.customer() instead.
        "::get::DeliveryChalan::customer": {
          url: urlBase + "/DeliveryChalans/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use Hub.customers.findById() instead.
        "::findById::Hub::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/customers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Hub.customers.destroyById() instead.
        "::destroyById::Hub::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/customers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Hub.customers.updateById() instead.
        "::updateById::Hub::customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/customers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Hub.customers() instead.
        "::get::Hub::customers": {
          isArray: true,
          url: urlBase + "/Hubs/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Hub.customers.create() instead.
        "::create::Hub::customers": {
          url: urlBase + "/Hubs/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Hub.customers.createMany() instead.
        "::createMany::Hub::customers": {
          isArray: true,
          url: urlBase + "/Hubs/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Hub.customers.destroyAll() instead.
        "::delete::Hub::customers": {
          url: urlBase + "/Hubs/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use Hub.customers.count() instead.
        "::count::Hub::customers": {
          url: urlBase + "/Hubs/:id/customers/count",
          method: "GET"
        },

        // INTERNAL. Use Invoice.customer() instead.
        "::get::Invoice::customer": {
          url: urlBase + "/Invoices/:id/customer",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Customer#updateOrCreate
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#update
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#destroyById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Customer#removeById
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Customer#modelName
    * @propertyOf lbServices.Customer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Customer`.
    */
    R.modelName = "Customer";

    /**
     * @ngdoc object
     * @name lbServices.Customer.orders
     * @header lbServices.Customer.orders
     * @object
     * @description
     *
     * The object `Customer.orders` groups methods
     * manipulating `Order` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#orders Customer.orders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#orders
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries orders of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::get::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#count
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Counts orders of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.orders.count = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::count::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#create
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.create = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::create::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#createMany
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Creates a new instance in orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.createMany = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::createMany::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#destroyAll
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Deletes all orders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyAll = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::delete::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#destroyById
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Delete a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.orders.destroyById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::destroyById::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#findById
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Find a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.findById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::findById::Customer::orders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.orders#updateById
         * @methodOf lbServices.Customer.orders
         *
         * @description
         *
         * Update a related item by id for orders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for orders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Order` object.)
         * </em>
         */
        R.orders.updateById = function() {
          var TargetResource = $injector.get("Order");
          var action = TargetResource["::updateById::Customer::orders"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.salesOrders
     * @header lbServices.Customer.salesOrders
     * @object
     * @description
     *
     * The object `Customer.salesOrders` groups methods
     * manipulating `SalesOrder` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#salesOrders Customer.salesOrders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#salesOrders
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries salesOrders of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.salesOrders = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::get::Customer::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.salesOrders#count
         * @methodOf lbServices.Customer.salesOrders
         *
         * @description
         *
         * Counts salesOrders of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.salesOrders.count = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::count::Customer::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.salesOrders#create
         * @methodOf lbServices.Customer.salesOrders
         *
         * @description
         *
         * Creates a new instance in salesOrders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.salesOrders.create = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::create::Customer::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.salesOrders#createMany
         * @methodOf lbServices.Customer.salesOrders
         *
         * @description
         *
         * Creates a new instance in salesOrders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.salesOrders.createMany = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::createMany::Customer::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.salesOrders#destroyAll
         * @methodOf lbServices.Customer.salesOrders
         *
         * @description
         *
         * Deletes all salesOrders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.salesOrders.destroyAll = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::delete::Customer::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.salesOrders#destroyById
         * @methodOf lbServices.Customer.salesOrders
         *
         * @description
         *
         * Delete a related item by id for salesOrders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for salesOrders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.salesOrders.destroyById = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::destroyById::Customer::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.salesOrders#findById
         * @methodOf lbServices.Customer.salesOrders
         *
         * @description
         *
         * Find a related item by id for salesOrders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for salesOrders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.salesOrders.findById = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::findById::Customer::salesOrders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.salesOrders#updateById
         * @methodOf lbServices.Customer.salesOrders
         *
         * @description
         *
         * Update a related item by id for salesOrders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for salesOrders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.salesOrders.updateById = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::updateById::Customer::salesOrders"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.deliveryChalans
     * @header lbServices.Customer.deliveryChalans
     * @object
     * @description
     *
     * The object `Customer.deliveryChalans` groups methods
     * manipulating `DeliveryChalan` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#deliveryChalans Customer.deliveryChalans()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#deliveryChalans
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries deliveryChalans of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R.deliveryChalans = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::get::Customer::deliveryChalans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.deliveryChalans#count
         * @methodOf lbServices.Customer.deliveryChalans
         *
         * @description
         *
         * Counts deliveryChalans of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.deliveryChalans.count = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::count::Customer::deliveryChalans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.deliveryChalans#create
         * @methodOf lbServices.Customer.deliveryChalans
         *
         * @description
         *
         * Creates a new instance in deliveryChalans of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R.deliveryChalans.create = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::create::Customer::deliveryChalans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.deliveryChalans#createMany
         * @methodOf lbServices.Customer.deliveryChalans
         *
         * @description
         *
         * Creates a new instance in deliveryChalans of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R.deliveryChalans.createMany = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::createMany::Customer::deliveryChalans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.deliveryChalans#destroyAll
         * @methodOf lbServices.Customer.deliveryChalans
         *
         * @description
         *
         * Deletes all deliveryChalans of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.deliveryChalans.destroyAll = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::delete::Customer::deliveryChalans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.deliveryChalans#destroyById
         * @methodOf lbServices.Customer.deliveryChalans
         *
         * @description
         *
         * Delete a related item by id for deliveryChalans.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for deliveryChalans
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.deliveryChalans.destroyById = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::destroyById::Customer::deliveryChalans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.deliveryChalans#findById
         * @methodOf lbServices.Customer.deliveryChalans
         *
         * @description
         *
         * Find a related item by id for deliveryChalans.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for deliveryChalans
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R.deliveryChalans.findById = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::findById::Customer::deliveryChalans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.deliveryChalans#updateById
         * @methodOf lbServices.Customer.deliveryChalans
         *
         * @description
         *
         * Update a related item by id for deliveryChalans.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for deliveryChalans
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R.deliveryChalans.updateById = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::updateById::Customer::deliveryChalans"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer#hub
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Fetches belongsTo relation hub.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        R.hub = function() {
          var TargetResource = $injector.get("Hub");
          var action = TargetResource["::get::Customer::hub"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.invoices
     * @header lbServices.Customer.invoices
     * @object
     * @description
     *
     * The object `Customer.invoices` groups methods
     * manipulating `Invoice` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#invoices Customer.invoices()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#invoices
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Queries invoices of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoices = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::get::Customer::invoices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.invoices#count
         * @methodOf lbServices.Customer.invoices
         *
         * @description
         *
         * Counts invoices of Customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.invoices.count = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::count::Customer::invoices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.invoices#create
         * @methodOf lbServices.Customer.invoices
         *
         * @description
         *
         * Creates a new instance in invoices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoices.create = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::create::Customer::invoices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.invoices#createMany
         * @methodOf lbServices.Customer.invoices
         *
         * @description
         *
         * Creates a new instance in invoices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoices.createMany = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::createMany::Customer::invoices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.invoices#destroyAll
         * @methodOf lbServices.Customer.invoices
         *
         * @description
         *
         * Deletes all invoices of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.invoices.destroyAll = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::delete::Customer::invoices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.invoices#destroyById
         * @methodOf lbServices.Customer.invoices
         *
         * @description
         *
         * Delete a related item by id for invoices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for invoices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.invoices.destroyById = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::destroyById::Customer::invoices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.invoices#findById
         * @methodOf lbServices.Customer.invoices
         *
         * @description
         *
         * Find a related item by id for invoices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for invoices
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoices.findById = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::findById::Customer::invoices"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.invoices#updateById
         * @methodOf lbServices.Customer.invoices
         *
         * @description
         *
         * Update a related item by id for invoices.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for invoices
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R.invoices.updateById = function() {
          var TargetResource = $injector.get("Invoice");
          var action = TargetResource["::updateById::Customer::invoices"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Customer.pricing
     * @header lbServices.Customer.pricing
     * @object
     * @description
     *
     * The object `Customer.pricing` groups methods
     * manipulating `Pricing` instances related to `Customer`.
     *
     * Call {@link lbServices.Customer#pricing Customer.pricing()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Customer#pricing
         * @methodOf lbServices.Customer
         *
         * @description
         *
         * Fetches hasOne relation pricing.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        R.pricing = function() {
          var TargetResource = $injector.get("Pricing");
          var action = TargetResource["::get::Customer::pricing"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.pricing#create
         * @methodOf lbServices.Customer.pricing
         *
         * @description
         *
         * Creates a new instance in pricing of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        R.pricing.create = function() {
          var TargetResource = $injector.get("Pricing");
          var action = TargetResource["::create::Customer::pricing"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.pricing#createMany
         * @methodOf lbServices.Customer.pricing
         *
         * @description
         *
         * Creates a new instance in pricing of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        R.pricing.createMany = function() {
          var TargetResource = $injector.get("Pricing");
          var action = TargetResource["::createMany::Customer::pricing"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.pricing#destroy
         * @methodOf lbServices.Customer.pricing
         *
         * @description
         *
         * Deletes pricing of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.pricing.destroy = function() {
          var TargetResource = $injector.get("Pricing");
          var action = TargetResource["::destroy::Customer::pricing"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Customer.pricing#update
         * @methodOf lbServices.Customer.pricing
         *
         * @description
         *
         * Update pricing of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        R.pricing.update = function() {
          var TargetResource = $injector.get("Pricing");
          var action = TargetResource["::update::Customer::pricing"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Hub
 * @header lbServices.Hub
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Hub` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Hub",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Hubs/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Hub.customers.findById() instead.
        "prototype$__findById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/customers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Hub.customers.destroyById() instead.
        "prototype$__destroyById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/customers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Hub.customers.updateById() instead.
        "prototype$__updateById__customers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/customers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Hub.itemCategories.findById() instead.
        "prototype$__findById__itemCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/itemCategories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Hub.itemCategories.destroyById() instead.
        "prototype$__destroyById__itemCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/itemCategories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Hub.itemCategories.updateById() instead.
        "prototype$__updateById__itemCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/itemCategories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Hub.items.findById() instead.
        "prototype$__findById__items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/items/:fk",
          method: "GET"
        },

        // INTERNAL. Use Hub.items.destroyById() instead.
        "prototype$__destroyById__items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/items/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Hub.items.updateById() instead.
        "prototype$__updateById__items": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Hubs/:id/items/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Hub.customers() instead.
        "prototype$__get__customers": {
          isArray: true,
          url: urlBase + "/Hubs/:id/customers",
          method: "GET"
        },

        // INTERNAL. Use Hub.customers.create() instead.
        "prototype$__create__customers": {
          url: urlBase + "/Hubs/:id/customers",
          method: "POST"
        },

        // INTERNAL. Use Hub.customers.destroyAll() instead.
        "prototype$__delete__customers": {
          url: urlBase + "/Hubs/:id/customers",
          method: "DELETE"
        },

        // INTERNAL. Use Hub.customers.count() instead.
        "prototype$__count__customers": {
          url: urlBase + "/Hubs/:id/customers/count",
          method: "GET"
        },

        // INTERNAL. Use Hub.itemCategories() instead.
        "prototype$__get__itemCategories": {
          isArray: true,
          url: urlBase + "/Hubs/:id/itemCategories",
          method: "GET"
        },

        // INTERNAL. Use Hub.itemCategories.create() instead.
        "prototype$__create__itemCategories": {
          url: urlBase + "/Hubs/:id/itemCategories",
          method: "POST"
        },

        // INTERNAL. Use Hub.itemCategories.destroyAll() instead.
        "prototype$__delete__itemCategories": {
          url: urlBase + "/Hubs/:id/itemCategories",
          method: "DELETE"
        },

        // INTERNAL. Use Hub.itemCategories.count() instead.
        "prototype$__count__itemCategories": {
          url: urlBase + "/Hubs/:id/itemCategories/count",
          method: "GET"
        },

        // INTERNAL. Use Hub.items() instead.
        "prototype$__get__items": {
          isArray: true,
          url: urlBase + "/Hubs/:id/items",
          method: "GET"
        },

        // INTERNAL. Use Hub.items.create() instead.
        "prototype$__create__items": {
          url: urlBase + "/Hubs/:id/items",
          method: "POST"
        },

        // INTERNAL. Use Hub.items.destroyAll() instead.
        "prototype$__delete__items": {
          url: urlBase + "/Hubs/:id/items",
          method: "DELETE"
        },

        // INTERNAL. Use Hub.items.count() instead.
        "prototype$__count__items": {
          url: urlBase + "/Hubs/:id/items/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Hub#create
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Hubs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Hub#createMany
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Hubs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Hub#upsert
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Hubs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Hub#exists
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Hubs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Hub#findById
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Hubs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Hub#find
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Hubs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Hub#findOne
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Hubs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Hub#updateAll
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Hubs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Hub#deleteById
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Hubs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Hub#count
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Hubs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Hub#prototype$updateAttributes
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Hubs/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Hub#createChangeStream
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Hubs/change-stream",
          method: "POST"
        },

        // INTERNAL. Use ItemCategory.hub() instead.
        "::get::ItemCategory::hub": {
          url: urlBase + "/ItemCategories/:id/hub",
          method: "GET"
        },

        // INTERNAL. Use Item.hub() instead.
        "::get::Item::hub": {
          url: urlBase + "/Items/:id/hub",
          method: "GET"
        },

        // INTERNAL. Use Customer.hub() instead.
        "::get::Customer::hub": {
          url: urlBase + "/Customers/:id/hub",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Hub#updateOrCreate
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Hub#update
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Hub#destroyById
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Hub#removeById
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Hub` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Hub#modelName
    * @propertyOf lbServices.Hub
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Hub`.
    */
    R.modelName = "Hub";

    /**
     * @ngdoc object
     * @name lbServices.Hub.customers
     * @header lbServices.Hub.customers
     * @object
     * @description
     *
     * The object `Hub.customers` groups methods
     * manipulating `Customer` instances related to `Hub`.
     *
     * Call {@link lbServices.Hub#customers Hub.customers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Hub#customers
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Queries customers of Hub.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Hub::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.customers#count
         * @methodOf lbServices.Hub.customers
         *
         * @description
         *
         * Counts customers of Hub.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.customers.count = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::count::Hub::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.customers#create
         * @methodOf lbServices.Hub.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.create = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::create::Hub::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.customers#createMany
         * @methodOf lbServices.Hub.customers
         *
         * @description
         *
         * Creates a new instance in customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.createMany = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::createMany::Hub::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.customers#destroyAll
         * @methodOf lbServices.Hub.customers
         *
         * @description
         *
         * Deletes all customers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroyAll = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::delete::Hub::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.customers#destroyById
         * @methodOf lbServices.Hub.customers
         *
         * @description
         *
         * Delete a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.customers.destroyById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::destroyById::Hub::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.customers#findById
         * @methodOf lbServices.Hub.customers
         *
         * @description
         *
         * Find a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.findById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::findById::Hub::customers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.customers#updateById
         * @methodOf lbServices.Hub.customers
         *
         * @description
         *
         * Update a related item by id for customers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for customers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customers.updateById = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::updateById::Hub::customers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Hub.itemCategories
     * @header lbServices.Hub.itemCategories
     * @object
     * @description
     *
     * The object `Hub.itemCategories` groups methods
     * manipulating `ItemCategory` instances related to `Hub`.
     *
     * Call {@link lbServices.Hub#itemCategories Hub.itemCategories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Hub#itemCategories
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Queries itemCategories of Hub.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        R.itemCategories = function() {
          var TargetResource = $injector.get("ItemCategory");
          var action = TargetResource["::get::Hub::itemCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.itemCategories#count
         * @methodOf lbServices.Hub.itemCategories
         *
         * @description
         *
         * Counts itemCategories of Hub.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.itemCategories.count = function() {
          var TargetResource = $injector.get("ItemCategory");
          var action = TargetResource["::count::Hub::itemCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.itemCategories#create
         * @methodOf lbServices.Hub.itemCategories
         *
         * @description
         *
         * Creates a new instance in itemCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        R.itemCategories.create = function() {
          var TargetResource = $injector.get("ItemCategory");
          var action = TargetResource["::create::Hub::itemCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.itemCategories#createMany
         * @methodOf lbServices.Hub.itemCategories
         *
         * @description
         *
         * Creates a new instance in itemCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        R.itemCategories.createMany = function() {
          var TargetResource = $injector.get("ItemCategory");
          var action = TargetResource["::createMany::Hub::itemCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.itemCategories#destroyAll
         * @methodOf lbServices.Hub.itemCategories
         *
         * @description
         *
         * Deletes all itemCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.itemCategories.destroyAll = function() {
          var TargetResource = $injector.get("ItemCategory");
          var action = TargetResource["::delete::Hub::itemCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.itemCategories#destroyById
         * @methodOf lbServices.Hub.itemCategories
         *
         * @description
         *
         * Delete a related item by id for itemCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for itemCategories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.itemCategories.destroyById = function() {
          var TargetResource = $injector.get("ItemCategory");
          var action = TargetResource["::destroyById::Hub::itemCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.itemCategories#findById
         * @methodOf lbServices.Hub.itemCategories
         *
         * @description
         *
         * Find a related item by id for itemCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for itemCategories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        R.itemCategories.findById = function() {
          var TargetResource = $injector.get("ItemCategory");
          var action = TargetResource["::findById::Hub::itemCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.itemCategories#updateById
         * @methodOf lbServices.Hub.itemCategories
         *
         * @description
         *
         * Update a related item by id for itemCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for itemCategories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemCategory` object.)
         * </em>
         */
        R.itemCategories.updateById = function() {
          var TargetResource = $injector.get("ItemCategory");
          var action = TargetResource["::updateById::Hub::itemCategories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Hub.items
     * @header lbServices.Hub.items
     * @object
     * @description
     *
     * The object `Hub.items` groups methods
     * manipulating `Item` instances related to `Hub`.
     *
     * Call {@link lbServices.Hub#items Hub.items()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Hub#items
         * @methodOf lbServices.Hub
         *
         * @description
         *
         * Queries items of Hub.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R.items = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::get::Hub::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.items#count
         * @methodOf lbServices.Hub.items
         *
         * @description
         *
         * Counts items of Hub.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.items.count = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::count::Hub::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.items#create
         * @methodOf lbServices.Hub.items
         *
         * @description
         *
         * Creates a new instance in items of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R.items.create = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::create::Hub::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.items#createMany
         * @methodOf lbServices.Hub.items
         *
         * @description
         *
         * Creates a new instance in items of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R.items.createMany = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::createMany::Hub::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.items#destroyAll
         * @methodOf lbServices.Hub.items
         *
         * @description
         *
         * Deletes all items of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.items.destroyAll = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::delete::Hub::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.items#destroyById
         * @methodOf lbServices.Hub.items
         *
         * @description
         *
         * Delete a related item by id for items.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for items
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.items.destroyById = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::destroyById::Hub::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.items#findById
         * @methodOf lbServices.Hub.items
         *
         * @description
         *
         * Find a related item by id for items.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for items
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R.items.findById = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::findById::Hub::items"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Hub.items#updateById
         * @methodOf lbServices.Hub.items
         *
         * @description
         *
         * Update a related item by id for items.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for items
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Item` object.)
         * </em>
         */
        R.items.updateById = function() {
          var TargetResource = $injector.get("Item");
          var action = TargetResource["::updateById::Hub::items"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.OrderStatus
 * @header lbServices.OrderStatus
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `OrderStatus` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "OrderStatus",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/OrderStatuses/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#create
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/OrderStatuses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#createMany
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/OrderStatuses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#upsert
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/OrderStatuses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#exists
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/OrderStatuses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#findById
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/OrderStatuses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#find
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/OrderStatuses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#findOne
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/OrderStatuses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#updateAll
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/OrderStatuses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#deleteById
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/OrderStatuses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#count
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/OrderStatuses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#prototype$updateAttributes
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/OrderStatuses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#createChangeStream
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/OrderStatuses/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Order.orderStatus() instead.
        "::get::Order::orderStatus": {
          url: urlBase + "/Orders/:id/orderStatus",
          method: "GET"
        },

        // INTERNAL. Use Order.orderStatus.create() instead.
        "::create::Order::orderStatus": {
          url: urlBase + "/Orders/:id/orderStatus",
          method: "POST"
        },

        // INTERNAL. Use Order.orderStatus.createMany() instead.
        "::createMany::Order::orderStatus": {
          isArray: true,
          url: urlBase + "/Orders/:id/orderStatus",
          method: "POST"
        },

        // INTERNAL. Use Order.orderStatus.update() instead.
        "::update::Order::orderStatus": {
          url: urlBase + "/Orders/:id/orderStatus",
          method: "PUT"
        },

        // INTERNAL. Use Order.orderStatus.destroy() instead.
        "::destroy::Order::orderStatus": {
          url: urlBase + "/Orders/:id/orderStatus",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#updateOrCreate
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#update
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#destroyById
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.OrderStatus#removeById
         * @methodOf lbServices.OrderStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `OrderStatus` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.OrderStatus#modelName
    * @propertyOf lbServices.OrderStatus
    * @description
    * The name of the model represented by this $resource,
    * i.e. `OrderStatus`.
    */
    R.modelName = "OrderStatus";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.SalesOrderStatus
 * @header lbServices.SalesOrderStatus
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SalesOrderStatus` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SalesOrderStatus",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/SalesOrderStatuses/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#create
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/SalesOrderStatuses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#createMany
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/SalesOrderStatuses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#upsert
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/SalesOrderStatuses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#exists
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/SalesOrderStatuses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#findById
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/SalesOrderStatuses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#find
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/SalesOrderStatuses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#findOne
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/SalesOrderStatuses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#updateAll
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/SalesOrderStatuses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#deleteById
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/SalesOrderStatuses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#count
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/SalesOrderStatuses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#prototype$updateAttributes
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/SalesOrderStatuses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#createChangeStream
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/SalesOrderStatuses/change-stream",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.salesOrderStatus() instead.
        "::get::SalesOrder::salesOrderStatus": {
          url: urlBase + "/SalesOrders/:id/salesOrderStatus",
          method: "GET"
        },

        // INTERNAL. Use SalesOrder.salesOrderStatus.create() instead.
        "::create::SalesOrder::salesOrderStatus": {
          url: urlBase + "/SalesOrders/:id/salesOrderStatus",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.salesOrderStatus.createMany() instead.
        "::createMany::SalesOrder::salesOrderStatus": {
          isArray: true,
          url: urlBase + "/SalesOrders/:id/salesOrderStatus",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.salesOrderStatus.update() instead.
        "::update::SalesOrder::salesOrderStatus": {
          url: urlBase + "/SalesOrders/:id/salesOrderStatus",
          method: "PUT"
        },

        // INTERNAL. Use SalesOrder.salesOrderStatus.destroy() instead.
        "::destroy::SalesOrder::salesOrderStatus": {
          url: urlBase + "/SalesOrders/:id/salesOrderStatus",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#updateOrCreate
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#update
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#destroyById
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.SalesOrderStatus#removeById
         * @methodOf lbServices.SalesOrderStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrderStatus` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.SalesOrderStatus#modelName
    * @propertyOf lbServices.SalesOrderStatus
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SalesOrderStatus`.
    */
    R.modelName = "SalesOrderStatus";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.DeliveryChalanStatus
 * @header lbServices.DeliveryChalanStatus
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DeliveryChalanStatus` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "DeliveryChalanStatus",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/DeliveryChalanStatuses/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#create
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/DeliveryChalanStatuses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#createMany
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/DeliveryChalanStatuses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#upsert
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/DeliveryChalanStatuses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#exists
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/DeliveryChalanStatuses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#findById
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/DeliveryChalanStatuses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#find
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/DeliveryChalanStatuses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#findOne
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/DeliveryChalanStatuses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#updateAll
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/DeliveryChalanStatuses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#deleteById
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/DeliveryChalanStatuses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#count
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/DeliveryChalanStatuses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#prototype$updateAttributes
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/DeliveryChalanStatuses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#createChangeStream
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/DeliveryChalanStatuses/change-stream",
          method: "POST"
        },

        // INTERNAL. Use DeliveryChalan.deliveryChalanStatus() instead.
        "::get::DeliveryChalan::deliveryChalanStatus": {
          url: urlBase + "/DeliveryChalans/:id/deliveryChalanStatus",
          method: "GET"
        },

        // INTERNAL. Use DeliveryChalan.deliveryChalanStatus.create() instead.
        "::create::DeliveryChalan::deliveryChalanStatus": {
          url: urlBase + "/DeliveryChalans/:id/deliveryChalanStatus",
          method: "POST"
        },

        // INTERNAL. Use DeliveryChalan.deliveryChalanStatus.createMany() instead.
        "::createMany::DeliveryChalan::deliveryChalanStatus": {
          isArray: true,
          url: urlBase + "/DeliveryChalans/:id/deliveryChalanStatus",
          method: "POST"
        },

        // INTERNAL. Use DeliveryChalan.deliveryChalanStatus.update() instead.
        "::update::DeliveryChalan::deliveryChalanStatus": {
          url: urlBase + "/DeliveryChalans/:id/deliveryChalanStatus",
          method: "PUT"
        },

        // INTERNAL. Use DeliveryChalan.deliveryChalanStatus.destroy() instead.
        "::destroy::DeliveryChalan::deliveryChalanStatus": {
          url: urlBase + "/DeliveryChalans/:id/deliveryChalanStatus",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#updateOrCreate
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#update
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#destroyById
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.DeliveryChalanStatus#removeById
         * @methodOf lbServices.DeliveryChalanStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalanStatus` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.DeliveryChalanStatus#modelName
    * @propertyOf lbServices.DeliveryChalanStatus
    * @description
    * The name of the model represented by this $resource,
    * i.e. `DeliveryChalanStatus`.
    */
    R.modelName = "DeliveryChalanStatus";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.InvoiceStatus
 * @header lbServices.InvoiceStatus
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `InvoiceStatus` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "InvoiceStatus",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/InvoiceStatuses/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#create
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/InvoiceStatuses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#createMany
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/InvoiceStatuses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#upsert
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/InvoiceStatuses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#exists
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/InvoiceStatuses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#findById
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/InvoiceStatuses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#find
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/InvoiceStatuses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#findOne
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/InvoiceStatuses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#updateAll
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/InvoiceStatuses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#deleteById
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/InvoiceStatuses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#count
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/InvoiceStatuses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#prototype$updateAttributes
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/InvoiceStatuses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#createChangeStream
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/InvoiceStatuses/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Invoice.invoiceStatuses() instead.
        "::get::Invoice::invoiceStatuses": {
          url: urlBase + "/Invoices/:id/invoiceStatuses",
          method: "GET"
        },

        // INTERNAL. Use Invoice.invoiceStatuses.create() instead.
        "::create::Invoice::invoiceStatuses": {
          url: urlBase + "/Invoices/:id/invoiceStatuses",
          method: "POST"
        },

        // INTERNAL. Use Invoice.invoiceStatuses.createMany() instead.
        "::createMany::Invoice::invoiceStatuses": {
          isArray: true,
          url: urlBase + "/Invoices/:id/invoiceStatuses",
          method: "POST"
        },

        // INTERNAL. Use Invoice.invoiceStatuses.update() instead.
        "::update::Invoice::invoiceStatuses": {
          url: urlBase + "/Invoices/:id/invoiceStatuses",
          method: "PUT"
        },

        // INTERNAL. Use Invoice.invoiceStatuses.destroy() instead.
        "::destroy::Invoice::invoiceStatuses": {
          url: urlBase + "/Invoices/:id/invoiceStatuses",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#updateOrCreate
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#update
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#destroyById
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.InvoiceStatus#removeById
         * @methodOf lbServices.InvoiceStatus
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.InvoiceStatus#modelName
    * @propertyOf lbServices.InvoiceStatus
    * @description
    * The name of the model represented by this $resource,
    * i.e. `InvoiceStatus`.
    */
    R.modelName = "InvoiceStatus";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Invoice
 * @header lbServices.Invoice
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Invoice` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Invoice",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Invoices/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Invoice.invoiceStatuses() instead.
        "prototype$__get__invoiceStatuses": {
          url: urlBase + "/Invoices/:id/invoiceStatuses",
          method: "GET"
        },

        // INTERNAL. Use Invoice.invoiceStatuses.create() instead.
        "prototype$__create__invoiceStatuses": {
          url: urlBase + "/Invoices/:id/invoiceStatuses",
          method: "POST"
        },

        // INTERNAL. Use Invoice.invoiceStatuses.update() instead.
        "prototype$__update__invoiceStatuses": {
          url: urlBase + "/Invoices/:id/invoiceStatuses",
          method: "PUT"
        },

        // INTERNAL. Use Invoice.invoiceStatuses.destroy() instead.
        "prototype$__destroy__invoiceStatuses": {
          url: urlBase + "/Invoices/:id/invoiceStatuses",
          method: "DELETE"
        },

        // INTERNAL. Use Invoice.deliveryChalan() instead.
        "prototype$__get__deliveryChalan": {
          url: urlBase + "/Invoices/:id/deliveryChalan",
          method: "GET"
        },

        // INTERNAL. Use Invoice.customer() instead.
        "prototype$__get__customer": {
          url: urlBase + "/Invoices/:id/customer",
          method: "GET"
        },

        // INTERNAL. Use Invoice.salesOrder() instead.
        "prototype$__get__salesOrder": {
          url: urlBase + "/Invoices/:id/salesOrder",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Invoice#create
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Invoices",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Invoice#createMany
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Invoices",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Invoice#upsert
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Invoices",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Invoice#exists
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Invoices/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Invoice#findById
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Invoices/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Invoice#find
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Invoices",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Invoice#findOne
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Invoices/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Invoice#updateAll
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Invoices/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Invoice#deleteById
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Invoices/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Invoice#count
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Invoices/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Invoice#prototype$updateAttributes
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Invoices/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Invoice#createChangeStream
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Invoices/change-stream",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.invoice() instead.
        "::get::SalesOrder::invoice": {
          url: urlBase + "/SalesOrders/:id/invoice",
          method: "GET"
        },

        // INTERNAL. Use SalesOrder.invoice.create() instead.
        "::create::SalesOrder::invoice": {
          url: urlBase + "/SalesOrders/:id/invoice",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.invoice.createMany() instead.
        "::createMany::SalesOrder::invoice": {
          isArray: true,
          url: urlBase + "/SalesOrders/:id/invoice",
          method: "POST"
        },

        // INTERNAL. Use SalesOrder.invoice.update() instead.
        "::update::SalesOrder::invoice": {
          url: urlBase + "/SalesOrders/:id/invoice",
          method: "PUT"
        },

        // INTERNAL. Use SalesOrder.invoice.destroy() instead.
        "::destroy::SalesOrder::invoice": {
          url: urlBase + "/SalesOrders/:id/invoice",
          method: "DELETE"
        },

        // INTERNAL. Use DeliveryChalan.invoice() instead.
        "::get::DeliveryChalan::invoice": {
          url: urlBase + "/DeliveryChalans/:id/invoice",
          method: "GET"
        },

        // INTERNAL. Use DeliveryChalan.invoice.create() instead.
        "::create::DeliveryChalan::invoice": {
          url: urlBase + "/DeliveryChalans/:id/invoice",
          method: "POST"
        },

        // INTERNAL. Use DeliveryChalan.invoice.createMany() instead.
        "::createMany::DeliveryChalan::invoice": {
          isArray: true,
          url: urlBase + "/DeliveryChalans/:id/invoice",
          method: "POST"
        },

        // INTERNAL. Use DeliveryChalan.invoice.update() instead.
        "::update::DeliveryChalan::invoice": {
          url: urlBase + "/DeliveryChalans/:id/invoice",
          method: "PUT"
        },

        // INTERNAL. Use DeliveryChalan.invoice.destroy() instead.
        "::destroy::DeliveryChalan::invoice": {
          url: urlBase + "/DeliveryChalans/:id/invoice",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.invoices.findById() instead.
        "::findById::Customer::invoices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/invoices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Customer.invoices.destroyById() instead.
        "::destroyById::Customer::invoices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/invoices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.invoices.updateById() instead.
        "::updateById::Customer::invoices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Customers/:id/invoices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Customer.invoices() instead.
        "::get::Customer::invoices": {
          isArray: true,
          url: urlBase + "/Customers/:id/invoices",
          method: "GET"
        },

        // INTERNAL. Use Customer.invoices.create() instead.
        "::create::Customer::invoices": {
          url: urlBase + "/Customers/:id/invoices",
          method: "POST"
        },

        // INTERNAL. Use Customer.invoices.createMany() instead.
        "::createMany::Customer::invoices": {
          isArray: true,
          url: urlBase + "/Customers/:id/invoices",
          method: "POST"
        },

        // INTERNAL. Use Customer.invoices.destroyAll() instead.
        "::delete::Customer::invoices": {
          url: urlBase + "/Customers/:id/invoices",
          method: "DELETE"
        },

        // INTERNAL. Use Customer.invoices.count() instead.
        "::count::Customer::invoices": {
          url: urlBase + "/Customers/:id/invoices/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Invoice#updateOrCreate
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Invoice#update
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Invoice#destroyById
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Invoice#removeById
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Invoice` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Invoice#modelName
    * @propertyOf lbServices.Invoice
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Invoice`.
    */
    R.modelName = "Invoice";

    /**
     * @ngdoc object
     * @name lbServices.Invoice.invoiceStatuses
     * @header lbServices.Invoice.invoiceStatuses
     * @object
     * @description
     *
     * The object `Invoice.invoiceStatuses` groups methods
     * manipulating `InvoiceStatus` instances related to `Invoice`.
     *
     * Call {@link lbServices.Invoice#invoiceStatuses Invoice.invoiceStatuses()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Invoice#invoiceStatuses
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Fetches hasOne relation invoiceStatuses.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        R.invoiceStatuses = function() {
          var TargetResource = $injector.get("InvoiceStatus");
          var action = TargetResource["::get::Invoice::invoiceStatuses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Invoice.invoiceStatuses#create
         * @methodOf lbServices.Invoice.invoiceStatuses
         *
         * @description
         *
         * Creates a new instance in invoiceStatuses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        R.invoiceStatuses.create = function() {
          var TargetResource = $injector.get("InvoiceStatus");
          var action = TargetResource["::create::Invoice::invoiceStatuses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Invoice.invoiceStatuses#createMany
         * @methodOf lbServices.Invoice.invoiceStatuses
         *
         * @description
         *
         * Creates a new instance in invoiceStatuses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        R.invoiceStatuses.createMany = function() {
          var TargetResource = $injector.get("InvoiceStatus");
          var action = TargetResource["::createMany::Invoice::invoiceStatuses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Invoice.invoiceStatuses#destroy
         * @methodOf lbServices.Invoice.invoiceStatuses
         *
         * @description
         *
         * Deletes invoiceStatuses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.invoiceStatuses.destroy = function() {
          var TargetResource = $injector.get("InvoiceStatus");
          var action = TargetResource["::destroy::Invoice::invoiceStatuses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Invoice.invoiceStatuses#update
         * @methodOf lbServices.Invoice.invoiceStatuses
         *
         * @description
         *
         * Update invoiceStatuses of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InvoiceStatus` object.)
         * </em>
         */
        R.invoiceStatuses.update = function() {
          var TargetResource = $injector.get("InvoiceStatus");
          var action = TargetResource["::update::Invoice::invoiceStatuses"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Invoice#deliveryChalan
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Fetches belongsTo relation deliveryChalan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DeliveryChalan` object.)
         * </em>
         */
        R.deliveryChalan = function() {
          var TargetResource = $injector.get("DeliveryChalan");
          var action = TargetResource["::get::Invoice::deliveryChalan"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Invoice#customer
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Fetches belongsTo relation customer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Customer` object.)
         * </em>
         */
        R.customer = function() {
          var TargetResource = $injector.get("Customer");
          var action = TargetResource["::get::Invoice::customer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Invoice#salesOrder
         * @methodOf lbServices.Invoice
         *
         * @description
         *
         * Fetches belongsTo relation salesOrder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SalesOrder` object.)
         * </em>
         */
        R.salesOrder = function() {
          var TargetResource = $injector.get("SalesOrder");
          var action = TargetResource["::get::Invoice::salesOrder"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Pricing
 * @header lbServices.Pricing
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Pricing` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Pricing",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Pricings/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Pricing#create
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Pricings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pricing#createMany
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Pricings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pricing#upsert
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Pricings",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pricing#exists
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Pricings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pricing#findById
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Pricings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pricing#find
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Pricings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pricing#findOne
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Pricings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pricing#updateAll
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Pricings/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pricing#deleteById
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Pricings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pricing#count
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Pricings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pricing#prototype$updateAttributes
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Pricings/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Pricing#createChangeStream
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Pricings/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Customer.pricing() instead.
        "::get::Customer::pricing": {
          url: urlBase + "/Customers/:id/pricing",
          method: "GET"
        },

        // INTERNAL. Use Customer.pricing.create() instead.
        "::create::Customer::pricing": {
          url: urlBase + "/Customers/:id/pricing",
          method: "POST"
        },

        // INTERNAL. Use Customer.pricing.createMany() instead.
        "::createMany::Customer::pricing": {
          isArray: true,
          url: urlBase + "/Customers/:id/pricing",
          method: "POST"
        },

        // INTERNAL. Use Customer.pricing.update() instead.
        "::update::Customer::pricing": {
          url: urlBase + "/Customers/:id/pricing",
          method: "PUT"
        },

        // INTERNAL. Use Customer.pricing.destroy() instead.
        "::destroy::Customer::pricing": {
          url: urlBase + "/Customers/:id/pricing",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Pricing#updateOrCreate
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Pricing#update
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Pricing#destroyById
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Pricing#removeById
         * @methodOf lbServices.Pricing
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pricing` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Pricing#modelName
    * @propertyOf lbServices.Pricing
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Pricing`.
    */
    R.modelName = "Pricing";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.ItemPrice
 * @header lbServices.ItemPrice
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ItemPrice` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "ItemPrice",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ItemPrices/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#create
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/ItemPrices",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#createMany
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/ItemPrices",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#upsert
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/ItemPrices",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#exists
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/ItemPrices/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#findById
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ItemPrices/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#find
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ItemPrices",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#findOne
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ItemPrices/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#updateAll
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/ItemPrices/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#deleteById
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/ItemPrices/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#count
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/ItemPrices/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#prototype$updateAttributes
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/ItemPrices/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#createChangeStream
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/ItemPrices/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Item.itemPrices.findById() instead.
        "::findById::Item::itemPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Items/:id/itemPrices/:fk",
          method: "GET"
        },

        // INTERNAL. Use Item.itemPrices.destroyById() instead.
        "::destroyById::Item::itemPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Items/:id/itemPrices/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Item.itemPrices.updateById() instead.
        "::updateById::Item::itemPrices": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Items/:id/itemPrices/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Item.itemPrices() instead.
        "::get::Item::itemPrices": {
          isArray: true,
          url: urlBase + "/Items/:id/itemPrices",
          method: "GET"
        },

        // INTERNAL. Use Item.itemPrices.create() instead.
        "::create::Item::itemPrices": {
          url: urlBase + "/Items/:id/itemPrices",
          method: "POST"
        },

        // INTERNAL. Use Item.itemPrices.createMany() instead.
        "::createMany::Item::itemPrices": {
          isArray: true,
          url: urlBase + "/Items/:id/itemPrices",
          method: "POST"
        },

        // INTERNAL. Use Item.itemPrices.destroyAll() instead.
        "::delete::Item::itemPrices": {
          url: urlBase + "/Items/:id/itemPrices",
          method: "DELETE"
        },

        // INTERNAL. Use Item.itemPrices.count() instead.
        "::count::Item::itemPrices": {
          url: urlBase + "/Items/:id/itemPrices/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#updateOrCreate
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#update
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#destroyById
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.ItemPrice#removeById
         * @methodOf lbServices.ItemPrice
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `ItemPrice` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.ItemPrice#modelName
    * @propertyOf lbServices.ItemPrice
    * @description
    * The name of the model represented by this $resource,
    * i.e. `ItemPrice`.
    */
    R.modelName = "ItemPrice";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
