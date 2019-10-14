const countries = [
  ['andorra', 'Andorra', 'ad'],
  ['uae', 'U.A.E', 'ae'],
  ['afghanistan', 'Afghanistan', 'af'],
  ['antigua', 'Antigua', 'ag'],
  ['anguilla', 'Anguilla', 'ai'],
  ['albania', 'Albania', 'al'],
  ['armenia', 'Armenia', 'am'],
  ['netherlands antilles', 'Netherlands Antilles', 'an'],
  ['angola', 'Angola', 'ao'],
  ['argentina', 'Argentina', 'ar'],
  ['american samoa', 'American Samoa', 'as'],
  ['austria', 'Austria', 'at'],
  ['australia', 'Australia', 'au'],
  ['aruba', 'Aruba', 'aw'],
  ['aland islands', 'Aland Islands', 'ax'],
  ['azerbaijan', 'Azerbaijan', 'az'],
  ['bosnia', 'Bosnia', 'ba'],
  ['barbados', 'Barbados', 'bb'],
  ['bangladesh', 'Bangladesh', 'bd'],
  ['belgium', 'Belgium', 'be'],
  ['burkina faso', 'Burkina Faso', 'bf'],
  ['bulgaria', 'Bulgaria', 'bg'],
  ['bahrain', 'Bahrain', 'bh'],
  ['burundi', 'Burundi', 'bi'],
  ['benin', 'Benin', 'bj'],
  ['bermuda', 'Bermuda', 'bm'],
  ['brunei', 'Brunei', 'bn'],
  ['bolivia', 'Bolivia', 'bo'],
  ['brazil', 'Brazil', 'br'],
  ['bahamas', 'Bahamas', 'bs'],
  ['bhutan', 'Bhutan', 'bt'],
  ['bouvet island', 'Bouvet Island', 'bv'],
  ['botswana', 'Botswana', 'bw'],
  ['belarus', 'Belarus', 'by'],
  ['belize', 'Belize', 'bz'],
  ['canada', 'Canada', 'ca'],
  ['cocos islands', 'Cocos Islands', 'cc'],
  ['congo', 'Congo', 'cd'],
  ['central african republic', 'Central African Republic', 'cf'],
  ['congo brazzaville', 'Congo Brazzaville', 'cg'],
  ['switzerland', 'Switzerland', 'ch'],
  ['cote divoire', 'Cote Divoire', 'ci'],
  ['cook islands', 'Cook Islands', 'ck'],
  ['chile', 'Chile', 'cl'],
  ['cameroon', 'Cameroon', 'cm'],
  ['china', 'China', 'cn'],
  ['colombia', 'Colombia', 'co'],
  ['costa rica', 'Costa Rica', 'cr'],
  ['serbia', 'Serbia', 'cs'],
  ['cuba', 'Cuba', 'cu'],
  ['cape verde', 'Cape Verde', 'cv'],
  ['christmas island', 'Christmas Island', 'cx'],
  ['cyprus', 'Cyprus', 'cy'],
  ['czech republic', 'Czech Republic', 'cz'],
  ['germany', 'Germany', 'de'],
  ['djibouti', 'Djibouti', 'dj'],
  ['denmark', 'Denmark', 'dk'],
  ['dominica', 'Dominica', 'dm'],
  ['dominican republic', 'Dominican Republic', 'do'],
  ['algeria', 'Algeria', 'dz'],
  ['ecuador', 'Ecuador', 'ec'],
  ['estonia', 'Estonia', 'ee'],
  ['egypt', 'Egypt', 'eg'],
  ['western sahara', 'Western Sahara', 'eh'],
  ['eritrea', 'Eritrea', 'er'],
  ['spain', 'Spain', 'es'],
  ['ethiopia', 'Ethiopia', 'et'],
  ['european union', 'European Union', 'eu'],
  ['finland', 'Finland', 'fi'],
  ['fiji', 'Fiji', 'fj'],
  ['falkland islands', 'Falkland Islands', 'fk'],
  ['micronesia', 'Micronesia', 'fm'],
  ['faroe islands', 'Faroe Islands', 'fo'],
  ['france', 'France', 'fr'],
  ['gabon', 'Gabon', 'ga'],
  ['united kingdom', 'United Kingdom', 'gb uk'],
  ['england', 'England', 'gb eng'],
  ['scotland', 'Scotland', 'gb sct'],
  ['wales', 'Wales', 'gb wls'],
  ['grenada', 'Grenada', 'gd'],
  ['georgia', 'Georgia', 'ge'],
  ['french guiana', 'French Guiana', 'gf'],
  ['ghana', 'Ghana', 'gh'],
  ['gibraltar', 'Gibraltar', 'gi'],
  ['greenland', 'Greenland', 'gl'],
  ['gambia', 'Gambia', 'gm'],
  ['guinea', 'Guinea', 'gn'],
  ['guadeloupe', 'Guadeloupe', 'gp'],
  ['equatorial guinea', 'Equatorial Guinea', 'gq'],
  ['greece', 'Greece', 'gr'],
  ['sandwich islands', 'Sandwich Islands', 'gs'],
  ['guatemala', 'Guatemala', 'gt'],
  ['guam', 'Guam', 'gu'],
  ['guinea-bissau', 'Guinea-bissau', 'gw'],
  ['guyana', 'Guyana', 'gy'],
  ['hong kong', 'Hong Kong', 'hk'],
  ['heard island', 'Heard Island', 'hm'],
  ['honduras', 'Honduras', 'hn'],
  ['croatia', 'Croatia', 'hr'],
  ['haiti', 'Haiti', 'ht'],
  ['hungary', 'Hungary', 'hu'],
  ['indonesia', 'Indonesia', 'id'],
  ['ireland', 'Ireland', 'ie'],
  ['israel', 'Israel', 'il'],
  ['india', 'India', 'in'],
  ['indian ocean territory', 'Indian Ocean Territory', 'io'],
  ['iraq', 'Iraq', 'iq'],
  ['iran', 'Iran', 'ir'],
  ['iceland', 'Iceland', 'is'],
  ['italy', 'Italy', 'it'],
  ['jamaica', 'Jamaica', 'jm'],
  ['jordan', 'Jordan', 'jo'],
  ['japan', 'Japan', 'jp'],
  ['kenya', 'Kenya', 'ke'],
  ['kyrgyzstan', 'Kyrgyzstan', 'kg'],
  ['cambodia', 'Cambodia', 'kh'],
  ['kiribati', 'Kiribati', 'ki'],
  ['comoros', 'Comoros', 'km'],
  ['saint kitts and nevis', 'Saint Kitts And Nevis', 'kn'],
  ['north korea', 'North Korea', 'kp'],
  ['south korea', 'South Korea', 'kr'],
  ['kuwait', 'Kuwait', 'kw'],
  ['cayman islands', 'Cayman Islands', 'ky'],
  ['kazakhstan', 'Kazakhstan', 'kz'],
  ['laos', 'Laos', 'la'],
  ['lebanon', 'Lebanon', 'lb'],
  ['saint lucia', 'Saint Lucia', 'lc'],
  ['liechtenstein', 'Liechtenstein', 'li'],
  ['sri lanka', 'Sri Lanka', 'lk'],
  ['liberia', 'Liberia', 'lr'],
  ['lesotho', 'Lesotho', 'ls'],
  ['lithuania', 'Lithuania', 'lt'],
  ['luxembourg', 'Luxembourg', 'lu'],
  ['latvia', 'Latvia', 'lv'],
  ['libya', 'Libya', 'ly'],
  ['morocco', 'Morocco', 'ma'],
  ['monaco', 'Monaco', 'mc'],
  ['moldova', 'Moldova', 'md'],
  ['montenegro', 'Montenegro', 'me'],
  ['madagascar', 'Madagascar', 'mg'],
  ['marshall islands', 'Marshall Islands', 'mh'],
  ['macedonia', 'Macedonia', 'mk'],
  ['mali', 'Mali', 'ml'],
  ['burma', 'Burma', 'mm'],
  ['mongolia', 'Mongolia', 'mn'],
  ['macau', 'Macau', 'mo'],
  ['northern mariana islands', 'Northern Mariana Islands', 'mp'],
  ['martinique', 'Martinique', 'mq'],
  ['mauritania', 'Mauritania', 'mr'],
  ['montserrat', 'Montserrat', 'ms'],
  ['malta', 'Malta', 'mt'],
  ['mauritius', 'Mauritius', 'mu'],
  ['maldives', 'Maldives', 'mv'],
  ['malawi', 'Malawi', 'mw'],
  ['mexico', 'Mexico', 'mx'],
  ['malaysia', 'Malaysia', 'my'],
  ['mozambique', 'Mozambique', 'mz'],
  ['namibia', 'Namibia', 'na'],
  ['new caledonia', 'New Caledonia', 'nc'],
  ['niger', 'Niger', 'ne'],
  ['norfolk island', 'Norfolk Island', 'nf'],
  ['nigeria', 'Nigeria', 'ng'],
  ['nicaragua', 'Nicaragua', 'ni'],
  ['netherlands', 'Netherlands', 'nl'],
  ['norway', 'Norway', 'no'],
  ['nepal', 'Nepal', 'np'],
  ['nauru', 'Nauru', 'nr'],
  ['niue', 'Niue', 'nu'],
  ['new zealand', 'New Zealand', 'nz'],
  ['oman', 'Oman', 'om'],
  ['panama', 'Panama', 'pa'],
  ['peru', 'Peru', 'pe'],
  ['french polynesia', 'French Polynesia', 'pf'],
  ['new guinea', 'New Guinea', 'pg'],
  ['philippines', 'Philippines', 'ph'],
  ['pakistan', 'Pakistan', 'pk'],
  ['poland', 'Poland', 'pl'],
  ['saint pierre', 'Saint Pierre', 'pm'],
  ['pitcairn islands', 'Pitcairn Islands', 'pn'],
  ['puerto rico', 'Puerto Rico', 'pr'],
  ['palestine', 'Palestine', 'ps'],
  ['portugal', 'Portugal', 'pt'],
  ['palau', 'Palau', 'pw'],
  ['paraguay', 'Paraguay', 'py'],
  ['qatar', 'Qatar', 'qa'],
  ['reunion', 'Reunion', 're'],
  ['romania', 'Romania', 'ro'],
  ['serbia', 'Serbia', 'rs'],
  ['russia', 'Russia', 'ru'],
  ['rwanda', 'Rwanda', 'rw'],
  ['saudi arabia', 'Saudi Arabia', 'sa'],
  ['solomon islands', 'Solomon Islands', 'sb'],
  ['seychelles', 'Seychelles', 'sc'],
  ['sudan', 'Sudan', 'sd'],
  ['sweden', 'Sweden', 'se'],
  ['singapore', 'Singapore', 'sg'],
  ['saint helena', 'Saint Helena', 'sh'],
  ['slovenia', 'Slovenia', 'si'],
  ['jan mayen', 'Jan Mayen', 'sj'],
  ['slovakia', 'Slovakia', 'sk'],
  ['sierra leone', 'Sierra Leone', 'sl'],
  ['san marino', 'San Marino', 'sm'],
  ['senegal', 'Senegal', 'sn'],
  ['somalia', 'Somalia', 'so'],
  ['suriname', 'Suriname', 'sr'],
  ['sao tome', 'Sao Tome', 'st'],
  ['el salvador', 'El Salvador', 'sv'],
  ['syria', 'Syria', 'sy'],
  ['swaziland', 'Swaziland', 'sz'],
  ['caicos islands', 'Caicos Islands', 'tc'],
  ['chad', 'Chad', 'td'],
  ['french territories', 'French Territories', 'tf'],
  ['togo', 'Togo', 'tg'],
  ['thailand', 'Thailand', 'th'],
  ['tajikistan', 'Tajikistan', 'tj'],
  ['tokelau', 'Tokelau', 'tk'],
  ['timorleste', 'Timorleste', 'tl'],
  ['turkmenistan', 'Turkmenistan', 'tm'],
  ['tunisia', 'Tunisia', 'tn'],
  ['tonga', 'Tonga', 'to'],
  ['turkey', 'Turkey', 'tr'],
  ['trinidad', 'Trinidad', 'tt'],
  ['tuvalu', 'Tuvalu', 'tv'],
  ['taiwan', 'Taiwan', 'tw'],
  ['tanzania', 'Tanzania', 'tz'],
  ['ukraine', 'Ukraine', 'ua'],
  ['uganda', 'Uganda', 'ug'],
  ['us minor islands', 'Us Minor Islands', 'um'],
  ['united states', 'United States', 'us'],
  ['uruguay', 'Uruguay', 'uy'],
  ['uzbekistan', 'Uzbekistan', 'uz'],
  ['vatican city', 'Vatican City', 'va'],
  ['saint vincent', 'Saint Vincent', 'vc'],
  ['venezuela', 'Venezuela', 've'],
  ['british virgin islands', 'British Virgin Islands', 'vg'],
  ['us virgin islands', 'Us Virgin Islands', 'vi'],
  ['vietnam', 'Vietnam', 'vn'],
  ['vanuatu', 'Vanuatu', 'vu'],
  ['wallis and futuna', 'Wallis And Futuna', 'wf'],
  ['samoa', 'Samoa', 'ws'],
  ['yemen', 'Yemen', 'ye'],
  ['mayotte', 'Mayotte', 'yt'],
  ['south africa', 'South Africa', 'za'],
  ['zambia', 'Zambia', 'zm'],
  ['zimbabwe', 'Zimbabwe', 'zw']
];

export default countries;
