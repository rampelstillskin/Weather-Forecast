(this.webpackJsonpweather_forecast =
  this.webpackJsonpweather_forecast || []).push([
  [0],
  {
    171: function(e, a, t) {},
    177: function(e, a, t) {
      e.exports = t.p + 'static/media/cloud.6327bf5b.jpg';
    },
    178: function(e, a, t) {
      e.exports = t.p + 'static/media/morning1.c4b2ded2.jpg';
    },
    179: function(e, a, t) {
      e.exports = t.p + 'static/media/rainMorning.b25ecc0d.jpg';
    },
    180: function(e, a, t) {
      e.exports = t.p + 'static/media/snowStorm.a25d559a.jpg';
    },
    181: function(e, a, t) {
      e.exports = t.p + 'static/media/stormMorning.141c3507.jpg';
    },
    182: function(e, a, t) {
      e.exports = t.p + 'static/media/day.20b2334b.jpg';
    },
    183: function(e, a, t) {
      e.exports = t.p + 'static/media/night.fed4845f.jpg';
    },
    187: function(e, a, t) {
      e.exports = t(393);
    },
    391: function(e, a, t) {},
    392: function(e, a, t) {},
    393: function(e, a, t) {
      'use strict';
      t.r(a);
      t(188), t(197);
      var n = t(2),
        r = t.n(n),
        c = t(172),
        s = t.n(c),
        i = (t(171), t(184)),
        u = t(173),
        o = t(174),
        m = t(175),
        l = t(185),
        d = t(176),
        p = t(186);
      function h(e) {
        var a = new Date(1e3 * e),
          t = ('0' + a.getHours()).slice(-2),
          n = ('0' + a.getMinutes()).slice(-2);
        return ''.concat(t, ':').concat(n);
      }
      var w = function(e) {
          var a = e.data,
            t = a.nameCity,
            n = a.currentTemperature,
            c = a.cloudiness,
            s = a.icon,
            i = a.humidity,
            u = a.sunrise,
            o = a.sunset,
            m = a.wind,
            l = a.pressure,
            d = Math.round(n);
          return r.a.createElement(
            'div',
            { className: 'weather-card' },
            r.a.createElement('h1', { className: 'weather-card__title' }, t),
            r.a.createElement(
              'p',
              { className: 'weather-card__currently' },
              s
                ? r.a.createElement('img', {
                    src: s,
                    alt: 'weather icon',
                    className: 'weather-card__currently-icon',
                  })
                : null,
              n ? r.a.createElement('span', null, d, '\xb0') : null
            ),
            r.a.createElement(
              'p',
              { className: 'weather-card__data cloudiness' },
              c
            ),
            i
              ? r.a.createElement(
                  'p',
                  { className: 'weather-card__list-data' },
                  r.a.createElement(
                    'span',
                    { className: 'weather-card__item-data wind' },
                    'Wind speed: ',
                    m.speed,
                    ' \u043c/\u0441'
                  ),
                  r.a.createElement(
                    'span',
                    { className: 'weather-card__item-data' },
                    'Humidity: ',
                    i
                  ),
                  r.a.createElement('br', null),
                  r.a.createElement(
                    'span',
                    { className: 'weather-card__item-data' },
                    'Pressure: ',
                    l,
                    ' mbar'
                  )
                )
              : null,
            u && o
              ? r.a.createElement(
                  'div',
                  { className: 'weather-card__sun-wrapper' },
                  r.a.createElement(
                    'p',
                    { className: 'weather-card__sun sunrise' },
                    r.a.createElement(
                      'span',
                      { className: 'weather-card__sun-data sun-card' },
                      'Sunrise:',
                      ' '
                    ),
                    h(u)
                  ),
                  r.a.createElement(
                    'p',
                    { className: 'weather-card__sun sunset' },
                    r.a.createElement(
                      'span',
                      { className: 'weather-card__sun-data sun-card' },
                      'Sunset:',
                      ' '
                    ),
                    h(o)
                  )
                )
              : null
          );
        },
        f = (t(391), ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
      var _ = function(e) {
        return r.a.createElement(
          'div',
          { className: 'five-cards__wrapper' },
          r.a.createElement(
            'ul',
            { className: 'five-cards__list' },
            e.data.fiveDays.map(function(e) {
              var a = 'https://openweathermap.org/img/wn/'.concat(
                e.weather[0].icon,
                '@2x.png'
              );
              return r.a.createElement(
                'li',
                { className: 'five-cards__item', key: e.dt_txt },
                r.a.createElement(
                  'span',
                  null,
                  (function(e) {
                    var a = new Date(1e3 * e),
                      t = f[a.getDay()],
                      n = a.getDate();
                    return ''.concat(t, ' ').concat(n);
                  })(e.dt)
                ),
                r.a.createElement('img', { src: a, alt: 'icon weather' }),
                r.a.createElement(
                  'p',
                  { className: 'five-cards__temp' },
                  r.a.createElement(
                    'span',
                    { className: 'five-cards__temp-item' },
                    Math.round(e.main.temp),
                    '\xb0'
                  )
                ),
                r.a.createElement(
                  'span',
                  { className: 'five-cards__item--description' },
                  e.weather[0].description
                )
              );
            })
          )
        );
      };
      t(392);
      var g = function(e) {
          var a = e.data.city;
          return r.a.createElement(
            'div',
            { className: 'weather-block' },
            r.a.createElement(w, { data: e.data }),
            r.a.createElement(_, { data: e.data }),
            r.a.createElement(
              'form',
              { className: 'weather-form', onSubmit: e.handleSubmit },
              r.a.createElement('input', {
                type: 'text',
                name: 'city',
                className: 'weather-form__input',
                placeholder: 'City name',
                value: a,
                onChange: e.handleChange,
                autoComplete: 'off',
              }),
              r.a.createElement('button', {
                type: 'submit',
                className: 'weather-form__button',
              })
            )
          );
        },
        y = t(177),
        E = t.n(y),
        v = t(178),
        b = t.n(v),
        N = t(179),
        C = t.n(N),
        x = t(180),
        D = t.n(x),
        j = t(181),
        k = t.n(j),
        S = t(182),
        T = t.n(S),
        O = t(183),
        M = t.n(O),
        B = 'd1663099de2c72e24962a3ac1d663db6',
        P = (function(e) {
          function a(e) {
            var t;
            return (
              Object(o.a)(this, a),
              ((t = Object(l.a)(
                this,
                Object(d.a)(a).call(this, e)
              )).weatherBackground = function(e) {
                if (t.state.nameCity)
                  switch (e) {
                    case 'Thunderstorm':
                      return ''.concat(k.a);
                    case 'Drizzle':
                    case 'Rain':
                      return ''.concat(C.a);
                    case 'Snow':
                      return ''.concat(D.a);
                    case 'Clear':
                      return ''.concat(b.a);
                    case 'Clouds':
                      return ''.concat(E.a);
                  }
              }),
              (t.weatherBackgroundDayOrNight = function() {
                var e = new Date().getHours();
                return e > 7 && e < 18 ? T.a : M.a;
              }),
              (t.handleChange = function(e) {
                var a = e.target,
                  n = a.name,
                  r = a.value;
                t.setState(Object(u.a)({}, n, r));
              }),
              (t.handleSubmit = function(e) {
                e.preventDefault();
                var a = { method: 'GET', mode: 'cors' },
                  n = fetch(
                    'https://api.openweathermap.org/data/2.5/weather?q='
                      .concat(t.state.city, '&units=metric&appid=')
                      .concat(B),
                    a
                  ),
                  r = fetch(
                    'https://api.openweathermap.org/data/2.5/forecast?q='
                      .concat(t.state.city, '&units=metric&appid=')
                      .concat(B),
                    a
                  );
                t.state.city
                  ? Promise.all([n, r]).then(function(e) {
                      return Promise.all(
                        e.map(function(e) {
                          return e.json();
                        })
                      )
                        .then(function(e) {
                          var a = Object(i.a)(e, 2),
                            n = a[0],
                            r = a[1].list.filter(function(e) {
                              return e.dt_txt.includes('15:00:00');
                            });
                          t.setState({
                            nameCity: n.name,
                            currentTemperature: n.main.temp,
                            maxTemperature: ''.concat(n.main.temp_max, '\xb0'),
                            cloudiness: n.weather[0].description,
                            humidity: ''.concat(n.main.humidity, '%'),
                            sunrise: n.sys.sunrise,
                            sunset: n.sys.sunset,
                            wind: n.wind,
                            pressure: n.main.pressure,
                            weatherConditions: n.weather[0].main,
                            currentDayData: n.weather[0].icon,
                            fiveDays: r,
                            icon: 'https://openweathermap.org/img/wn/'.concat(
                              n.weather[0].icon,
                              '@2x.png'
                            ),
                          });
                        })
                        .catch(function(e) {
                          return console.error('Error: '.concat(e));
                        });
                    })
                  : alert('Please enter a city name');
              }),
              (t.state = {
                city: '',
                nameCity: '',
                currentTemperature: '',
                minTemperature: '',
                maxTemperature: '',
                cloudiness: '',
                humidity: '',
                sunrise: '',
                sunset: '',
                wind: '',
                pressure: '',
                weatherConditions: '',
                fiveDays: [],
                currentDayData: '',
              }),
              t
            );
          }
          return (
            Object(p.a)(a, e),
            Object(m.a)(a, [
              { key: 'componentWillMount', value: function() {} },
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    'section',
                    {
                      className: 'weather-block__wrapper',
                      style: this.state.nameCity
                        ? {
                            background: 'url('.concat(
                              this.weatherBackground(
                                this.state.weatherConditions
                              ),
                              ')'
                            ),
                          }
                        : {
                            background: 'url('.concat(
                              this.weatherBackgroundDayOrNight(),
                              ')'
                            ),
                          },
                    },
                    r.a.createElement(g, {
                      data: this.state,
                      handleChange: this.handleChange,
                      handleSubmit: this.handleSubmit,
                    })
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      var H = function() {
        return r.a.createElement(P, null);
      };
      s.a.render(r.a.createElement(H, null), document.getElementById('root'));
    },
  },
  [[187, 1, 2]],
]);
//# sourceMappingURL=main.55f5bdd0.chunk.js.map
