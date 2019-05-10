import prompt from '@system.prompt';

export default {
	B8error(data){
		
		/**
		 * 11
		 */
		if(data.user_low_no_dust_box == 'yes' || data.user_low_no_dust_box == 'YES' || data.user_alert_no_dust_box == 'yes' || data.user_alert_no_dust_box == 'YES'){
			return "未安装尘盒标识";
		}
		if(data.user_low_dust_box_full == 'yes' || data.user_low_dust_box_full == 'YES' || data.user_alert_dust_box_full == 'yes' || data.user_alert_dust_box_full == 'YES'){
			return "尘盒已满";
		}
		if(data.user_low_normal_fail == 'yes' || data.user_low_normal_fail == 'YES' || data.status_low_has_error == 'yes' || data.status_low_has_error == 'YES'){
			return "机器有故障";
		}
		if(data.user_low_map_overload == 'yes' || data.user_low_map_overload == 'YES'){
			return "地图数据越界了，需要重新绘制";
		}
		if(data.user_low_no_water == 'yes' || data.user_low_no_water == 'YES' || data.user_alert_less_water == 'yes' || data.user_alert_less_water == 'YES'){
			return "水箱缺水";
		}
		if(data.user_low_charging_switch_off == 'yes' || data.user_low_charging_switch_off == 'YES' || data.user_alert_charge_switch_off == 'yes' || data.user_alert_charge_switch_off == 'YES'){
			return "充电电源未打开";
		}
		if(data.user_low_front_back_baffle_stuck == 'yes' || data.user_low_front_back_baffle_stuck == 'YES' || data.user_alert_front_baffle_stuck == 'yes' || data.user_alert_front_baffle_stuck == 'YES'){
			return "前后挡板卡住了";
		}
		if(data.user_low_left_right_wheel_hang == 'yes' || data.user_low_left_right_wheel_hang == 'YES' || data.user_alert_left_right_wheel_hang == 'yes' || data.user_alert_left_right_wheel_hang == 'YES'){
			return "左右轮悬空";
		}
		/**
		 * 12
		 */
		if(data.failure_low_no_dust_box == 'yes' || data.failure_low_no_dust_box == 'YES'){
			return "未安装尘盒标识";
		}
		if(data.failure_low_dust_box_full == 'yes' || data.failure_low_dust_box_full == 'YES'){
			return "尘盒已满";
		}
		if(data.failure_low_water_tank_overload == 'yes' || data.failure_low_water_tank_overload == 'YES'){
			return "水箱电机电流过载";
		}
		if(data.failure_low_fan == 'yes' || data.failure_low_fan == 'YES'){
			return "风扇故障";
		}
		if(data.failure_low_right_side_brush == 'yes' || data.failure_low_right_side_brush == 'YES'){
			return "右边刷故障";
		}
		if(data.failure_low_left_side_brush == 'yes' || data.failure_low_left_side_brush == 'YES'){
			return "左边刷故障";
		}
		if(data.failure_low_right_wheel_overload == 'yes' || data.failure_low_right_wheel_overload == 'YES'){
			return "右轮过载";
		}
		if(data.failure_low_left_wheel_overload == 'yes' || data.failure_low_left_wheel_overload == 'YES'){
			return "左轮过载";
		}
		if(data.failure_mid_front_collision_switch == 'yes' || data.failure_mid_front_collision_switch == 'YES'){
			return "前边碰撞开关故障";
		}
		if(data.failure_mid_roll_brush == 'yes' || data.failure_mid_roll_brush == 'YES'){
			return "滚刷故障";
		}
		if(data.failure_mid_right_back_fall_sensor == 'yes' || data.failure_mid_right_back_fall_sensor == 'YES'){
			return "右后跌落传感器故障";
		}
		if(data.failure_mid_left_back_fall_sensor == 'yes' || data.failure_mid_left_back_fall_sensor == 'YES'){
			return "左后跌落传感器故障";
		}
		if(data.failure_mid_right_back_hanging_sensor == 'yes' || data.failure_mid_right_back_hanging_sensor == 'YES'){
			return "右轮悬空";
		}
		if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
			return "左轮悬空";
		}
		if(data.failure_mid_right_collision_switch == 'yes' || data.failure_mid_right_collision_switch == 'YES'){
			return "右边碰撞开关故障";
		}
		if(data.failure_mid_left_collision_switch == 'yes' || data.failure_mid_left_collision_switch == 'YES'){
			return "左边碰撞开关故障";
		}
		if(data.failure_high_left_front_infra_red == 'yes' || data.failure_high_left_front_infra_red == 'YES'){
			return "左前红外故障";
		}
		if(data.failure_high_right_front_infra_red == 'yes' || data.failure_high_right_front_infra_red == 'YES'){
			return "右前红外故障";
		}
		if(data.failure_high_front_infra_red == 'yes' || data.failure_high_front_infra_red == 'YES'){
			return "前方红外故障";
		}
		if(data.failure_high_left_infra_red == 'yes' || data.failure_high_left_infra_red == 'YES'){
			return "左边红外故障";
		}
		if(data.failure_high_right_infra_red == 'yes' || data.failure_high_right_infra_red == 'YES'){
			return "右边红外故障";
		}
		if(data.failure_high_right_drop_sensor == 'yes' || data.failure_high_right_drop_sensor == 'YES'){
			return "右边跌落传感器故障";
		}
		if(data.failure_high_front_drop_sensor == 'yes' || data.failure_high_front_drop_sensor == 'YES'){
			return "前边跌落传感器故障";
		}
		if(data.failure_high_left_drop_sensor == 'yes' || data.failure_high_left_drop_sensor == 'YES'){
			return "左边跌落传感器故障";
		}
		
		// 
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// if(data.failure_mid_left_back_hanging_sensor == 'yes' || data.failure_mid_left_back_hanging_sensor == 'YES'){
		// 	return "";
		// }
		// 
		
		return false;
	}
}