import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import LS2Request from '@enact/webos/LS2Request';
import SwitchItem from '@enact/moonstone/SwitchItem';
import TimePicker from '@enact/moonstone/TimePicker';
import DatePicker from '@enact/moonstone/DatePicker';
import ExpandableList from '@enact/moonstone/ExpandableList';
import $L from '@enact/i18n/$L';

import css from '../../style/main.less';
import {setSystemSettings, setPreferences, setSystemTime} from '../../actions';

import {getTimeZoneList, debounce} from './utils/GeneralUtils';
import {Scroller} from '@enact/moonstone/Scroller';

const
	maxYear = 2037,
	minYear = 2017,
	updateTime = 60000;

class TimeDate extends React.Component {
	constructor (props) {
		super(props);

		// debouncer for pickers...
		this.onChangeDate = this.onChange.bind(this, 'date');
		this.onChangeTime = this.onChange.bind(this, 'time');

		this.timerObj = null;

		this.state = {
			currentUtc: null,
			currentDate: null,
			datePickerOpen: false,
			regionExpandableOpen: false,
			regionSelected: -1,
			timePickerOpen: false,
			timezoneExpandableOpen: false
		};
	}

	componentDidMount () {
		this.regionList.sort();
		this.defaultRegion.sort(function (a, b) {
			if (a.displayName < b.displayName) {
				return -1;
			} else if (a.displayName > b.displayName) {
				return 1;
			} else {
				return 0;
			}
		});

		this.getEffectiveBroadcastTime = new LS2Request().send({
			service: 'luna://com.palm.systemservice/time',
			method: 'getSystemTime',
			parameters: {subscribe: true},
			onSuccess: (res) => {
				this.setState({
					currentUtc: res.utc * 1000,
					currentDate: new Date(res.utc * 1000)
				});

				if (this.timerObj === null) {
					this.timerObj = setInterval(() => {
						this.setClock(updateTime);
					}, updateTime);
				}

				let timeZone = this.props.timeZone;
				let zone = timeZone.timezoneList[timeZone.timezoneProps.selected].ZoneID.split('/')[0];

				for (let i = 0; i < this.defaultRegion.length; i++) {
					if (this.defaultRegion[i].ZoneID.split('/')[0] === zone) {
						this.setState({
							regionSelected: i
						});
					}
				}
			}
		});
	}

	componentWillUnmount () {
		clearInterval(this.timerObj);
		this.timerObj = null;
		this.getEffectiveBroadcastTime.cancel();
	}

	defaultRegion = [
		{ // Africa
			City: 'Cairo',
			Country: 'Egypt',
			CountryCode: 'EG',
			Description: 'Eastern European Time',
			displayName: $L('Africa'),
			offsetFromUTC: 120,
			supportDST: 0,
			ZoneID: 'Africa/Cairo'
		},
		{ // America
			City: 'Los Angeles',
			Country: 'United States of America',
			CountryCode: 'US',
			Description: 'Pacific Time',
			displayName: $L('America'), // Americas
			offsetFromUTC: -480,
			preferred: true,
			supportDST: 0,
			ZoneID: 'America/Los_Angeles'
		},
		{ // Asia
			City: 'Seoul',
			Country: 'South Korea',
			CountryCode: 'KR',
			Description: 'Korea Time',
			displayName: $L('Asia'),
			offsetFromUTC: 540,
			preferred: true,
			supportDST: 0,
			ZoneID: 'Asia/Seoul'
		},
		{ // Atlantic
			City: 'Madeira',
			Country: 'Portugal',
			CountryCode: 'PT',
			Description: 'Western European Time',
			displayName: $L('Atlantic'), // The Atlantic Ocean
			offsetFromUTC: 0,
			supportDST: 0,
			ZoneID: 'Atlantic/Madeira'
		},
		{ // Australia
			City: 'Sydney',
			Country: 'Australia',
			CountryCode: 'AU',
			Description: 'Eastern Time (New South Wales)',
			displayName: $L('Australia'),
			offsetFromUTC: 600,
			preferred: true,
			supportDST: 0,
			ZoneID: 'Australia/Sydney'
		},
		{ // Europe
			City: 'London',
			Country: 'United Kingdom',
			CountryCode: 'GB',
			Description: 'Greenwich Mean Time',
			displayName: $L('Europe'),
			offsetFromUTC: 0,
			preferred: true,
			supportDST: 0,
			ZoneID: 'Europe/London'
		},
		{ // Indian
			Country: 'Maldives',
			CountryCode: 'MV',
			Description: 'Maldives Time',
			displayName: $L('Indian'), // The Indian Ocean
			offsetFromUTC: 300,
			preferred: true,
			supportDST: 0,
			ZoneID: 'Indian/Maldives'
		},
		{ // Pacific
			Country: 'Guam',
			CountryCode: 'GU',
			Description: 'Chamorro Time',
			displayName: $L('Pacific'), // The Pacific Ocean
			offsetFromUTC: 600,
			supportDST: 0,
			ZoneID: 'Pacific/Guam'
		}
	]

	regionList = [ // Region string is converted to the following string.
		$L('Africa'),
		$L('America'), // Americas
		$L('Asia'),
		$L('Atlantic'), // The Atlantic Ocean
		$L('Australia'),
		$L('Europe'),
		$L('Indian'), // The Indian Ocean
		$L('Pacific') // The Pacific Ocean
	]

	onChange (mode, event) {
		if (mode === 'date') {
			let myDate = new Date(event.value);
			this.setState({currentDate: myDate});

			let obj = {};
			obj.val = event.value;
			obj.type = 'date';

			return debounce(this.updateTimeDate, 1000, this, [obj]);
		} else if (mode === 'time') {
			let myDate = new Date(event.value);
			this.setState({currentDate: myDate});

			let obj = {};
			obj.val = event.value;
			obj.type = 'time';

			return debounce(this.updateTimeDate, 1000, this, [obj]);
		}
	}

	closeDatePicker = () => {
		this.setState({datePickerOpen: false});
	}

	closeRegionExpandable = () => {
		this.setState({
			regionExpandableOpen: false
		});
	}

	closeTimePicker = () => {
		this.setState({
			timePickerOpen: false
		});
	}

	closeTimezoneExpandable = () => {
		this.setState({
			timezoneExpandableOpen: false
		});
	}

	openDatePicker = () => {
		this.setState({
			datePickerOpen: true,
			timePickerOpen: false
		});
	}

	openRegionExpandable = () => {
		this.setState({
			regionExpandableOpen: true,
			timezoneExpandableOpen: false
		});
	}

	openTimePicker = () => {
		this.setState({
			timePickerOpen: true,
			datePickerOpen: false
		});
	}

	openTimezoneExpandable = () => {
		this.setState({
			regionExpandableOpen: false,
			timezoneExpandableOpen: true
		});
	}

	selectRegion = (ev) => {
		if (ev.selected === null) {
			return;
		}

		this.setState({
			regionSelected: this.regionList.indexOf(ev.data)
		});

		this.setTimezone(this.defaultRegion[ev.selected]);
	}

	selectTimezone = (ev) => {
		if (ev.selected === null) {
			return;
		}

		if (ev.data !== 'Custom') {
			this.setTimezone(this.props.timeZone.timezoneList[ev.selected]);
		}
	}

	setAutomatic = () => {
		this.setState({
			timePickerOpen: false,
			datePickerOpen: false
		});

		let val = !this.props.useNetworkTime;

		this.props.setSystemSettings({category: 'time', settings: {autoClock: val ? 'on' : 'off'}});
		this.props.setPreferences({useNetworkTime: val});
	}

	setClock = (miliSeconds) => {
		let adjustedUtc = this.state.currentUtc + miliSeconds;
		let newDate = new Date(adjustedUtc);
		if (newDate.getFullYear() === 2038) {
			clearInterval(this.timerObj);
			this.timerObj = null;
		} else {
			this.setState({
				currentUtc: adjustedUtc,
				currentDate: new Date(adjustedUtc)
			});
		}
	}

	setTimezone (value) {
		this.props.setSystemSettings({
			category: 'time',
			settings: {timeZone: value}
		});

		this.props.setPreferences({timeZone: value});
	}

	updateTimeDate ({val, type}) {
		let newTime = val;
		let newDate = val;
		let newTimeDate = new Date();

		// this.clearTimer();

		// because of linux 2038 problem(in 32bit)
		if (newDate) {
			if (newDate.getFullYear() > maxYear) {
				return;
			}
		}

		if (type === 'time') {
			newTimeDate.setHours(newTime.getHours(), newTime.getMinutes(), 0, 0);
		} else {
			newTimeDate.setFullYear(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
		}
		let param = {};
		param.utc = Math.floor(newTimeDate.getTime() / 1000);
		this.props.setSystemTime(param);
		this.props.setSystemSettings(param);
	}

	render () {
		let region = {
			'children': this.regionList,
			'selected': this.state.regionSelected
		};

		return (
			<Scroller>
				<div>
					<SwitchItem
						className={css.vspacingCMR}
						disabled={false}
						onToggle={this.setAutomatic}
						selected={this.props.useNetworkTime}
					>
						{$L('Set Automatically')}
					</SwitchItem>
					<TimePicker
						className={css.vspacingCMR}
						title={$L('Time')}
						noneText={$L('Set the current time manually.')}
						disabled={this.props.useNetworkTime}
						value={this.state.currentDate}
						open={this.state.timePickerOpen}
						onOpen={this.openTimePicker}
						onClose={this.closeTimePicker}
						onChange={this.onChangeTime}
						noLabels
					/>
					<DatePicker
						className={css.vspacingCMR}
						title={$L('Date')}
						noneText={$L('Set the current time manually.')}
						minYear={minYear}
						maxYear={maxYear}
						disabled={this.props.useNetworkTime}
						value={this.state.currentDate}
						open={this.state.datePickerOpen}
						onOpen={this.openDatePicker}
						onClose={this.closeDatePicker}
						onChange={this.onChangeDate}
						noLabels
					/>
					<ExpandableList
						className={css.vspacingCMR}
						title={$L('Region')}
						noneText={$L('Loading...')}
						select={'single'}
						closeOnSelect
						onSelect={this.selectRegion}
						onOpen={this.openRegionExpandable}
						onClose={this.closeRegionExpandable}
						open={this.state.regionExpandableOpen}
						selected={-1}
						{...region}
					/>
					<ExpandableList
						className={css.vspacingCMR}
						title={$L('Timezone')}
						noneText={$L('Loading...')}
						select={'single'}
						closeOnSelect
						onSelect={this.selectTimezone}
						onOpen={this.openTimezoneExpandable}
						onClose={this.closeTimezoneExpandable}
						open={this.state.timezoneExpandableOpen}
						selected={-1}
						{...this.props.timeZone.timezoneProps}
					/>
				</div>
			</Scroller>
		);
	}
}

TimeDate.propTypes = {
	setPreferences: PropTypes.func,
	setSystemSettings: PropTypes.func,
	setSystemTime: PropTypes.func,
	timeZone: PropTypes.object,
	useNetworkTime: PropTypes.bool
};

const mapStateToProps = ({intl}) => {
	let {timeZone, timeZoneList, useNetworkTime} = intl;
	let timezoneParam = {
		timezone: {
			selected: timeZone,
			values: timeZoneList
		}
	};

	return {
		useNetworkTime: useNetworkTime,
		timeZone: getTimeZoneList(timezoneParam)
	};
};

const mapDispatchToProps = (dispatch) => ({
	setSystemSettings (param) {
		dispatch(setSystemSettings(param));
	},
	setPreferences (param) {
		dispatch(setPreferences(param));
	},
	setSystemTime (param) {
		dispatch(setSystemTime(param));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeDate);
