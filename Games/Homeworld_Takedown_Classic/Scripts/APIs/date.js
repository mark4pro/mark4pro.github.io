//Date api by: Mark 4 Productions

var date_objects = [];

//Run code between 2 dates
function date(data) {
/** {
		"start_time":{
			"time":{
				"h":0,
				"m":0
			},
			"date":{
				"dow":null,
				"day":0,
				"month":0,
				"year":2021
			}
		},
		"end_time":{
			"time":{
				"h":0,
				"m":0
			},
			"date":{
				"dow":null,
				"day":0,
				"month":0,
				"year":2021
			}
		},
		"code":{
			"code":code,
			"init_code":true,
			"update_code":false
		}
	}**/
this.data = data;
this.date = new Date();
this.hours = this.date.getUTCHours();
this.minutes = this.date.getUTCMinutes();
this.dow = this.date.getUTCDay();
this.day = this.date.getUTCDate();
this.month = this.date.getUTCMonth();
this.year = this.date.getUTCFullYear();
	this.init = function() {
		if (this.data.code.init_code) {
		this.update();
		}
		if (this.data.code.update_code) {
		date_objects.push(this);
		}
	},
	this.update = function() {
		if (this.data.start_time.time == null) {
			if (this.data.start_time.date.dow == null) {
				if (this.data.start_time.date.day == null) {
					if (this.data.start_time.date.month == null) {
						//Match years
						if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
						eval(this.data.code.code);
						}
					} else {
						if (this.data.start_time.date.year == null) {
							//Match months
							if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
							eval(this.data.code.code);
							}
						} else {
							//Match months and years
							if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
								if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
								eval(this.data.code.code);
								}
							} 
						}
					}
				} else {
					if (this.data.start_time.date.month == null) {
						if (this.data.start_time.date.year == null) {
							//Match days
							if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
								eval(this.data.code.code);
							}
						} else {
							//Match days and years
							if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
								if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
								eval(this.data.code.code);
								}
							}
						}
					} else {
						if (this.data.start_time.date.year == null) {
							//Match days and months
							if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
								if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
								eval(this.data.code.code);
								}
							}
						} else {
							//Match days and months and years
							if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
								if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
									if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
									eval(this.data.code.code);
									}
								}
							}
						}
					}
				}
			} else {
				//Don't check days
				if (this.data.start_time.date.month == null) {
					if (this.data.start_time.date.year == null) {
						//Match dows
						if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
						eval(this.data.code.code);
						}
					} else {
						//Match dows and years
						if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
							if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
							eval(this.data.code.code);
							}
						}
					}
				} else {
					if (this.data.start_time.date.year == null) {
						//Match dows and months
						if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
							if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
							eval(this.data.code.code);
							}
						}
					} else {
						//Match dows and months and years
						if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
							if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
								if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
								eval(this.data.code.code);
								}
							}
						}
					}
				}
			}
		} else {
			if (this.data.start_time.time.h == null) {
				if (this.data.start_time.date.dow == null) {
					if (this.data.start_time.date.day == null) {
						if (this.data.start_time.date.month == null) {
							if (this.data.start_time.date.year == null) {
								//Match minutes
								if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
								eval(this.data.code.code);
								}
							} else {
								//Match minutes and years
								if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
									if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
									eval(this.data.code.code);
									}
								}
							}
						} else {
							if (this.data.start_time.date.year == null) {
								//Match minutes and months
								if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
									if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
									eval(this.data.code.code);
									}
								}
							} else {
								//Match minutes and months and years
								if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
									if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
										if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
										eval(this.data.code.code);
										}
									} 
								}
							}
						}
					} else {
						if (this.data.start_time.date.month == null) {
							if (this.data.start_time.date.year == null) {
								//Match minutes and days
								if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
									if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
										eval(this.data.code.code);
									}
								}
							} else {
								//Match minutes and days and years
								if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
									if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
										if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
										eval(this.data.code.code);
										}
									}
								}
							}
						} else {
							if (this.data.start_time.date.year == null) {
								//Match minutes and days and months
								if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
									if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
										if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
										eval(this.data.code.code);
										}
									}
								}
							} else {
								//Match minutes and days and months and years
								if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
									if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
										if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
											if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
											eval(this.data.code.code);
											}
										}
									}
								}
							}
						}
					}
				} else {
					//Don't check days
					if (this.data.start_time.date.month == null) {
						if (this.data.start_time.date.year == null) {
							//Match minutes and dows
							if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
								if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
								eval(this.data.code.code);
								}
							}
						} else {
							//Match minutes and dows and years
							if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
								if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
									if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
									eval(this.data.code.code);
									}
								}
							}
						}
					} else {
						if (this.data.start_time.date.year == null) {
							//Match minutes and dows and months
							if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
								if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
									if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
									eval(this.data.code.code);
									}
								}
							}
						} else {
							//Match minutes and dows and months and years
							if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
								if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
									if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
										if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
										eval(this.data.code.code);
										}
									}
								}
							}
						}
					}
				}
			} else {
				if (this.data.start_time.time.m == null) {
					if (this.data.start_time.date.dow == null) {
						if (this.data.start_time.date.day == null) {
							if (this.data.start_time.date.month == null) {
								if (this.data.start_time.date.year == null) {
									//Match hours
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
									eval(this.data.code.code);
									}
								} else {
									//Match hours and years
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
										eval(this.data.code.code);
										}
									}
								}
							} else {
								if (this.data.start_time.date.year == null) {
									//Match hours and months
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
										eval(this.data.code.code);
										}
									}
								} else {
									//Match hours and months and years
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
											if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
											eval(this.data.code.code);
											}
										} 
									}
								}
							}
						} else {
							if (this.data.start_time.date.month == null) {
								if (this.data.start_time.date.year == null) {
									//Match hours and days
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
											eval(this.data.code.code);
										}
									}
								} else {
									//Match hours and days and years
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
											if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
											eval(this.data.code.code);
											}
										}
									}
								}
							} else {
								if (this.data.start_time.date.year == null) {
									//Match hours and days and months
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
											if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
											eval(this.data.code.code);
											}
										}
									}
								} else {
									//Match hours and days and months and years
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
											if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
												if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
												eval(this.data.code.code);
												}
											}
										}
									}
								}
							}
						}
					} else {
						//Don't check days
						if (this.data.start_time.date.month == null) {
							if (this.data.start_time.date.year == null) {
								//Match hours and dows
								if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
									if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
									eval(this.data.code.code);
									}
								}
							} else {
								//Match hours and dows and years
								if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
									if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
										if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
										eval(this.data.code.code);
										}
									}
								}
							}
						} else {
							if (this.data.start_time.date.year == null) {
								//Match hours and dows and months
								if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
									if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
										if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
										eval(this.data.code.code);
										}
									}
								}
							} else {
								//Match hours and dows and months and years
								if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
									if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
										if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
											if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
											eval(this.data.code.code);
											}
										}
									}
								}
							}
						}
					}
				} else {
					if (this.data.start_time.date.dow == null) {
						if (this.data.start_time.date.day == null) {
							if (this.data.start_time.date.month == null) {
								if (this.data.start_time.date.year == null) {
									//Match hours and minutes
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
										eval(this.data.code.code);
										}
									}
								} else {
									//Match hours and minutes and years
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
											if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
											eval(this.data.code.code);
											}
										}
									}
								}
							} else {
								if (this.data.start_time.date.year == null) {
									//Match hours and minutes and months
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
											if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
											eval(this.data.code.code);
											}
										}
									}
								} else {
									//Match hours and minutes and months and years
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
											if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
												if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
												eval(this.data.code.code);
												}
											} 
										}
									}
								}
							}
						} else {
							if (this.data.start_time.date.month == null) {
								if (this.data.start_time.date.year == null) {
									//Match hours and minutes and days
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
											if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
												eval(this.data.code.code);
											}
										}
									}
								} else {
									//Match hours and minutes and days and years
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
											if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
												if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
												eval(this.data.code.code);
												}
											}
										}
									}
								}
							} else {
								if (this.data.start_time.date.year == null) {
									//Match hours and minutes and days and months
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
											if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
												if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
												eval(this.data.code.code);
												}
											}
										}
									}
								} else {
									//Match hours and minutes and days and months and years
									if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
										if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
											if (this.data.start_time.date.day <= this.day && this.day <= this.data.end_time.date.day) {
												if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
													if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
													eval(this.data.code.code);
													}
												}
											}
										}
									}
								}
							}
						}
					} else {
						//Don't check days
						if (this.data.start_time.date.month == null) {
							if (this.data.start_time.date.year == null) {
								//Match hours and minutes and dows
								if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
									if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
										if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
										eval(this.data.code.code);
										}
									}
								}
							} else {
								//Match hours and minutes and dows and years
								if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
									if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
										if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
											if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
											eval(this.data.code.code);
											}
										}
									}
								}
							}
						} else {
							if (this.data.start_time.date.year == null) {
								//Match hours and minutes and dows and months
								if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
									if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
										if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
											if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
											eval(this.data.code.code);
											}
										}
									}
								}
							} else {
								//Match hours and minutes and dows and months and years
								if (this.data.start_time.time.h <= this.hours && this.hours <= this.data.end_time.time.h) {
									if (this.data.start_time.time.m <= this.minutes && this.minutes <= this.data.end_time.time.m) {
										if (this.data.start_time.date.dow <= this.dow && this.dow <= this.data.end_time.date.dow) {
											if (this.data.start_time.date.month <= this.month && this.month <= this.data.end_time.date.month) {
												if (this.data.start_time.date.year <= this.year && this.year <= this.data.end_time.date.year) {
												eval(this.data.code.code);
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
this.init();
}

//Updates dates
function updateDates() {
	for (let i=0;i<date_objects.length;i++) {
	date_objects[i].update();
	}
}