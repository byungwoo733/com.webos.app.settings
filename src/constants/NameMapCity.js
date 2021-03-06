import $L from '@enact/i18n/$L';

function NameMapCity (city) {
	const ct = {
		// use '' because of translation
		'Abidjan' : $L('Abidjan'),
		'Accra' : $L('Accra'),
		'Adak' : $L('Adak'),
		'Addis Ababa' : $L('Addis Ababa'),
		// 'Adelaide' : $L('Adelaide'),
		'Aden' : $L('Aden'),
		'Algiers' : $L('Algiers'),
		'Almaty' : $L('Almaty'),
		'Amman' : $L('Amman'),
		'Amsterdam' : $L('Amsterdam'),
		'Anadyr' : $L('Anadyr'),
		'Anchorage' : $L('Anchorage'),
		'Antananarivo' : $L('Antananarivo'),
		'Apia' : $L('Apia'),
		'Aqtöbe' : $L('Aqtöbe'),
		'Araguaína' : $L('Araguaína'),
		'Ashgabat' : $L('Ashgabat'),
		'Asmara' : $L('Asmara'),
		'Asunción' : $L('Asunción'),
		'Athens' : $L('Athens'),
		'Atikokan' : $L('Atikokan'),
		'Auckland' : $L('Auckland'),
		'Azores' : $L('Azores'),
		'Baghdad' : $L('Baghdad'),
		'Bahrain' : $L('Bahrain'),
		'Baku' : $L('Baku'),
		'Bamako' : $L('Bamako'),
		'Bangkok' : $L('Bangkok'),
		'Bangui' : $L('Bangui'),
		'Banjul' : $L('Banjul'),
		'Beijing' : $L('Beijing'),
		'Beirut' : $L('Beirut'),
		'Belgrade' : $L('Belgrade'),
		'Belém' : $L('Belém'),
		'Berlin' : $L('Berlin'),
		'Bishkek' : $L('Bishkek'),
		'Bissau' : $L('Bissau'),	// i18n city name
		'Blanc-Sablon' : $L('Blanc-Sablon'),
		'Blantyre' : $L('Blantyre'),
		'Boa Vista' : $L('Boa Vista'),
		'Bogotá' : $L('Bogotá'),
		'Bratislava' : $L('Bratislava'),
		'Brazzaville': $L('Brazzaville'),
		// 'Brisbane' : $L('Brisbane'),
		'Broken Hill' : $L('Broken Hill'),
		'Brussels' : $L('Brussels'),
		'Bucharest' : $L('Bucharest'),
		'Budapest' : $L('Budapest'),
		'Buenos Aires' : $L('Buenos Aires'),
		'Bujumbura' : $L('Bujumbura'),
		'Cairo' : $L('Cairo'),
		'Campo Grande' : $L('Campo Grande'),
		'Canary Islands' : $L('Canary Islands'),
		'Cancún' : $L('Cancún'),
		'Caracas' : $L('Caracas'),
		'Casablanca' : $L('Casablanca'),
		'Ceuta' : $L('Ceuta'),
		'Chatham Islands' : $L('Chatham Islands'),
		'Chicago' : $L('Chicago'),
		'Chihuahua' : $L('Chihuahua'),
		'Chisinau' : $L('Chisinau'),
		'Choibalsan' : $L('Choibalsan'),
		'Chongqing' : $L('Chongqing'),
		'Christmas Island' : $L('Christmas Island'),
		'Colombo' : $L('Colombo'),
		'Conakry' : $L('Conakry'),	// i18n city name
		'Copenhagen' : $L('Copenhagen'),
		'Cuiabá' : $L('Cuiabá'),
		'Dakar' : $L('Dakar'),
		'Damascus' : $L('Damascus'),
		'Danmarkshavn' : $L('Danmarkshavn'),
		'Dar es Salaam' : $L('Dar es Salaam'),
		// 'Darwin' : $L('Darwin'),
		'Dawson' : $L('Dawson'),
		'Dawson Creek' : $L('Dawson Creek'),
		'Denver' : $L('Denver'),
		'Detroit' : $L('Detroit'),
		'Dhaka' : $L('Dhaka'),
		'Dili' : $L('Dili'),
		'Dodoma' : $L('Dodoma'),	// i18n city name
		'Doha' : $L('Doha'),
		'Douala' : $L('Douala'),
		'Dubai' : $L('Dubai'),
		'Dublin' : $L('Dublin'),
		'Dushanbe' : $L('Dushanbe'),
		'Easter Island' : $L('Easter Island'),
		'Edmonton' : $L('Edmonton'),
		'Eirunepé' : $L('Eirunepé'),
		// 'Eucla' : $L('Eucla'),
		'Fernando de Noronha' : $L('Fernando de Noronha'),
		'Fortaleza' : $L('Fortaleza'),
		'Freetown' : $L('Freetown'),
		'Gaborone' : $L('Gaborone'),
		'Galapagos Islands' : $L('Galapagos Islands'),
		'Gambier' : $L('Gambier'),
		'Gibraltar' : $L('Gibraltar'),
		'Glace Bay' : $L('Glace Bay'),
		'Godthab' : $L('Godthab'),
		'Guadalcanal' : $L('Guadalcanal'),
		'Guatemala City' : $L('Guatemala City'),
		'Guayaquil' : $L('Guayaquil'),
		'Halifax' : $L('Halifax'),
		'Harare' : $L('Harare'),
		'Harbin' : $L('Harbin'),
		'Havana' : $L('Havana'),
		'Helsinki' : $L('Helsinki'),
		'Hermosillo' : $L('Hermosillo'),
		'Ho Chi Minh' : $L('Ho Chi Minh'),
		// 'Hobart' : $L('Hobart'),
		'Honolulu' : $L('Honolulu'),
		'Indianapolis' : $L('Indianapolis'),
		'Irkutsk' : $L('Irkutsk'),
		'Istanbul' : $L('Istanbul'),
		'Jakarta - WIB' : $L('Jakarta'),
		'Jamaica' : $L('Jamaica'),
		'Jayapura' : $L('Jayapura'),
		'Jerusalem' : $L('Jerusalem'),
		'Johannesburg' : $L('Johannesburg'),
		'Kabul' : $L('Kabul'),
		'Kaliningrad' : $L('Kaliningrad'),
		'Kamchatka' : $L('Kamchatka'),
		'Kampala' : $L('Kampala'),
		'Karachi' : $L('Karachi'),
		'Kashgar' : $L('Kashgar'),
		'Kathmandu' : $L('Katmandu'),
		'Khartoum' : $L('Khartoum'),
		'Khovd' : $L('Khovd'),
		'Kiev' : $L('Kiev'),
		'Kigali' : $L('Kigali'),
		'Kingston' : $L('Kingston'),
		'Kinshasa' : $L('Kinshasa'),
		'Kiritimati' : $L('Kiritimati'),
		'Kolkata' : $L('Kolkata'),
		'Krasnoyarsk' : $L('Krasnoyarsk'),
		'Kuala Lumpur' : $L('Kuala Lumpur'),
		'Kuching' : $L('Kuching'),
		'Kuwait City' : $L('Kuwait City'),
		'La Paz' : $L('La Paz'),
		'Lagos' : $L('Lagos'),
		'Libreville' : $L('Libreville'),
		'Lilongwe' : $L('Lilongwe'),		// i18n city name
		'Lima' : $L('Lima'),
		'Lisbon' : $L('Lisbon'),
		'Ljubljana' : $L('Ljubljana'),
		'Lome' : $L('Lome'),		// i18n city name
		'London' : $L('London'),
		'Lord Howe' : $L('Lord Howe'),
		'Los Angeles' : $L('Los Angeles'),
		'Louisville' : $L('Louisville'),
		'Luanda' : $L('Luanda'),
		'Lubumbashi' : $L('Lubumbashi'),
		'Lusaka' : $L('Lusaka'),
		'Luxembourg' : $L('Luxembourg'),
		'Maceió ' : $L('Maceió '),
		'Maceió' : $L('Maceió'),
		'Madeira' : $L('Madeira'),
		'Madrid' : $L('Madrid'),
		'Magadan' : $L('Magadan'),
		'Makassar' : $L('Makassar'),
		'Malabo' : $L('Malabo'),
		'Managua' : $L('Managua'),
		'Manama' : $L('Manama'),	// i18n city name
		'Manaus' : $L('Manaus'),
		'Manila' : $L('Manila'),
		'Maputo' : $L('Maputo'),
		'Marquesas' : $L('Marquesas'),
		'Maseru' : $L('Maseru'),
		'Mazatlán' : $L('Mazatlán'),
		'Mbabane' : $L('Mbabane'),
		// 'Melbourne' : $L('Melbourne'),
		'Mexico City' : $L('Mexico City'),
		'Minsk' : $L('Minsk'),
		'Mogadishu' : $L('Mogadishu'),
		'Monaco' : $L('Monaco'),
		'Moncton' : $L('Moncton'),
		'Monrovia' : $L('Monrovia'),
		'Monterrey' : $L('Monterrey'),
		'Montevideo' : $L('Montevideo'),
		'Montréal' : $L('Montréal'),
		'Moscow' : $L('Moscow'),
		'Muscat' : $L('Muscat'),
		'Mérida' : $L('Mérida'),
		'Nairobi' : $L('Nairobi'),
		'Nassau' : $L('Nassau'),
		'Ndjamena' : $L('Ndjamena'),
		'New York' : $L('New York'),
		'Niamey' : $L('Niamey'),
		'Nicosia' : $L('Nicosia'),
		'Nipigon' : $L('Nipigon'),
		'Nouméa' : $L('Nouméa'),
		'Novosibirsk' : $L('Novosibirsk'),
		'Omsk' : $L('Omsk'),
		'Oranjestad' : $L('Oranjestad'),
		'Oslo' : $L('Oslo'),
		'Ouagadougou' : $L('Ouagadougou'),
		'Palau' : $L('Palau'),
		'Panama City' : $L('Panama City'),
		'Paramaribo' : $L('Paramaribo'),
		'Paris' : $L('Paris'),
		// 'Perth' : $L('Perth'),
		'Phnom Penh' : $L('Phnom Penh'),
		'Phoenix' : $L('Phoenix'),
		'Podgorica' : $L('Podgorica'),
		'Pontianak' : $L('Pontianak'),
		'Port Louis' : $L('Port Louis'),	// i18n city name
		'Port Moresby' : $L('Port Moresby'),
		'Port of Spain' : $L('Port of Spain'),
		'Port-au-Prince' : $L('Port-au-Prince'),
		'Porto Velho' : $L('Porto Velho'),
		'Porto Novo' : $L('Porto Novo'),	// i18n city name
		'Porto-Novo' : $L('Porto-Novo'),
		'Prague' : $L('Prague'),
		'Praia' : $L('Praia'),	// i18n city name
		'Pyongyang' : $L('Pyongyang'),
		'Rainy River' : $L('Rainy River'),
		'Rangoon' : $L('Rangoon'),
		'Recife' : $L('Recife'),
		'Regina' : $L('Regina'),
		'Reykjavik' : $L('Reykjavik'),
		'Riga' : $L('Riga'),
		'Rio Branco' : $L('Rio Branco'),
		'Riyadh' : $L('Riyadh'),
		'Rome' : $L('Rome'),
		'Sakhalin' : $L('Sakhalin'),
		'Samara' : $L('Samara'),
		'Samarkand' : $L('Samarkand'),
		'San Salvador' : $L('San Salvador'),
		'Sana' : $L('Sana'),		// i18n city name
		'San Luis' : $L('San Luis'),	// i18n city name
		'Santiago' : $L('Santiago'),
		'Santo Domingo' : $L('Santo Domingo'),
		'Sarajevo' : $L('Sarajevo'),
		'Scoresbysund' : $L('Scoresbysund'),
		'Seoul' : $L('Seoul'),
		'Shanghai' : $L('Shanghai'),
		'Simferopol' : $L('Simferopol'),
		'Skopje' : $L('Skopje'),
		'Sofia' : $L('Sofia'),
		'Srednekolymsk' : $L('Srednekolymsk'),
		"St. John's" : $L("St. John's"),
		'Stockholm' : $L('Stockholm'),
		'Swift Current' : $L('Swift Current'),
		// 'Sydney' : $L('Sydney'),
		'São Paulo' : $L('São Paulo'),
		'Tahiti' : $L('Tahiti'),
		'Taipei' : $L('Taipei'),
		'Tallinn' : $L('Tallinn'),
		'Tashkent' : $L('Tashkent'),
		'Tbilisi' : $L('Tbilisi'),
		'Tegucigalpa' : $L('Tegucigalpa'),
		'Tehran' : $L('Tehran'),
		'Thimphu' : $L('Thimphu'),
		'Thule' : $L('Thule'),
		'Tijuana' : $L('Tijuana'),
		'Tiranë' : $L('Tiranë'),
		'Tokyo' : $L('Tokyo'),
		'Toronto' : $L('Toronto'),
		'Tripoli' : $L('Tripoli'),
		'Tunis' : $L('Tunis'),
		'Ulaanbaatar' : $L('Ulaanbaatar'),
		'Urumqi' : $L('Urumqi'),
		'Uzhhorod' : $L('Uzhhorod'),
		'Vaduz' : $L('Vaduz'),
		'Vancouver' : $L('Vancouver'),
		'Vatican City' : $L('Vatican City'),
		'Vienna' : $L('Vienna'),
		'Vientiane' : $L('Vientiane'),
		'Vilnius' : $L('Vilnius'),
		'Vladivostok' : $L('Vladivostok'),
		'Volgograd' : $L('Volgograd'),
		'Warsaw' : $L('Warsaw'),
		'Windhoek' : $L('Windhoek'),
		'Winnipeg' : $L('Winnipeg'),
		'Yangon' : $L('Yangon'),	// i18n city name
		'Yamoussoukro' : $L('Yamoussoukro'),		// i18n city name
		'Yakutsk' : $L('Yakutsk'),
		'Yekaterinburg' : $L('Yekaterinburg'),
		'Yellowknife' : $L('Yellowknife'),
		'Yerevan' : $L('Yerevan'),
		'Zagreb' : $L('Zagreb'),
		'Zaporozhye' : $L('Zaporozhye'),
		'Zürich' : $L('Zürich'),
		'Sydney' : $L('NSW/ACT - New South Wales / Australian Capital Territory - Sydney'),
		'Melbourne' : $L('VIC - Victoria - Melbourne'),
		'Brisbane' : $L('QLD - Queensland - Brisbane'),
		'Adelaide' : $L('SA - South Australia - Adelaide'),
		'Perth' : $L('WA - Western Australia - Perth'),
		'Eucla' : $L('WA - Western Australia - Eucla'),
		'Hobart' : $L('TAS - Tasmania - Hobart'),
		'Darwin' : $L('NT - Northern Territory - Darwin'),
		'Custom' : $L('Custom')
	};

	return ct[city] || city;
}

export default NameMapCity;
