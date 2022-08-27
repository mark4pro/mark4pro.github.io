//Engine
function Engine(data=new EngineData()) {
	//Timer | TODO: fix this shit
	let timers = [];
	this.timer = function(id="",sec=0,once=true) {
		this.id = id;
		this.sec = sec;
		this.once = once;
		this.bool = false;
		let old_time = new Date().getTime();
		this.update = function() {
			if (!this.bool) {
				let current_time = new Date().getTime();
				if (Math.abs(current_time-old_time)>=this.sec) {
					this.bool = true;
					console.log(this.bool)
				}
			}
		};
		this.reset = function() {
			this.bool = false;
			console.log(this.bool)
			old_time = new Date().getTime();
		};
		timers.push(this);
	};
	//Get timer
	this.get_timer = function(id="") {
		for (let i=0;i<timers.length;i++) {
			if (timers[i].id = id) {
				return timers[i];
			}
		}
	};
	//Deletes or replaces object
	this.delete_object = function(name="main",i=0,replace="undefined") {
		switch(name){
			case "main":
				if (replace == "undefined") {
					main_object_array.splice(i,1);
				} else {
					main_object_array.splice(i,1,replace);
				}
			break;
			case "ui":
				if (replace == "undefined") {
					ui_layer.splice(i,1);
				} else {
					ui_layer.splice(i,1,replace);
				}
			break;
			case "above_wall":
				if (replace == "undefined") {
					above_wall_layer.splice(i,1);
				} else {
					above_wall_layer.splice(i,1,replace);
				}
			break;
			case "wall":
				if (replace == "undefined") {
					wall_layer.splice(i,1);
				} else {
					wall_layer.splice(i,1,replace);
				}
			break;
			case "upper_object":
				if (replace == "undefined") {
					upper_object_layer.splice(i,1);
				} else {
					upper_object_layer.splice(i,1,replace);
				}
			break;
			case "player_enemy":
				if (replace == "undefined") {
					player_enemy_spawn_layer.splice(i,1);
				} else {
					player_enemy_spawn_layer.splice(i,1,replace);
				}
			break;
			case "lower_object":
				if (replace == "undefined") {
					lower_object_layer.splice(i,1);
				} else {
					lower_object_layer.splice(i,1,replace);
				}
			break;
			case "background":
				if (replace == "undefined") {
					background_layer.splice(i,1);
				} else {
					background_layer.splice(i,1,replace);
				}
			break;
			case "collision":
				if (replace == "undefined") {
					collision_layer.splice(i,1);
				} else {
					collision_layer.splice(i,1,replace);
				}
			break;
		}
	};
	//Renderer
	this.reset_renderer_arrays = function(exceptions=null, update_renderer=true) {
		let compare = (arr_1,arr_2) => {this.array_compare(arr_1,arr_2,false)};
		if (exceptions == null) {
			ui_layer = [];
			above_wall_layer = [];
			wall_layer = [];
			upper_object_layer = [];
			player_enemy_spawn_layer = [];
			lower_object_layer = [];
			background_layer = [];
			collision_layer = [];
		}
		if (typeof exceptions == 'object' && !Array.isArray(exceptions)) {
			for (let i=0;i<ui_layer.length;i++) {
				if (!exceptions.includes(ui_layer[i].name)) {
					ui_layer.splice(i,1);
				}
			}
			for (let i=0;i<above_wall_layer.length;i++) {
				if (!exceptions.includes(above_wall_layer[i].name)) {
					above_wall_layer.splice(i,1);
				}
			}
			for (let i=0;i<wall_layer.length;i++) {
				if (!exceptions.includes(wall_layer[i].name)) {
					wall_layer.splice(i,1);
				}
			}
			for (let i=0;i<upper_object_layer.length;i++) {
				if (!exceptions.includes(upper_object_layer[i].name)) {
					upper_object_layer.splice(i,1);
				}
			}
			for (let i=0;i<player_enemy_spawn_layer.length;i++) {
				if (!exceptions.includes(player_enemy_spawn_layer[i].name)) {
					player_enemy_spawn_layer.splice(i,1);
				}
			}
			for (let i=0;i<lower_object_layer.length;i++) {
				if (!exceptions.includes(lower_object_layer[i].name)) {
					lower_object_layer.splice(i,1);
				}
			}
			for (let i=0;i<background_layer.length;i++) {
				if (!exceptions.includes(background_layer[i].name)) {
					background_layer.splice(i,1);
				}
			}
			for (let i=0;i<collision_layer.length;i++) {
				if (!exceptions.includes(collision_layer[i].name)) {
					collision_layer.splice(i,1);
				}
			}
		} else {
			for (let i=0;i<ui_layer.length;i++) {
				if (compare(ui_layer[i].tag,exceptions)) {
					console.log(ui_layer[i].tag[0]);
					ui_layer.splice(i,1);
				}
			}
			for (let i=0;i<above_wall_layer.length;i++) {
				if (compare(above_wall_layer[i].tag,exceptions)) {
					above_wall_layer.splice(i,1);
				}
			}
			for (let i=0;i<wall_layer.length;i++) {
				if (compare(wall_layer[i].tag,exceptions)) {
					wall_layer.splice(i,1);
				}
			}
			for (let i=0;i<upper_object_layer.length;i++) {
				if (compare(upper_object_layer[i].tag,exceptions)) {
					upper_object_layer.splice(i,1);
				}
			}
			for (let i=0;i<player_enemy_spawn_layer.length;i++) {
				if (compare(player_enemy_spawn_layer[i].tag,exceptions)) {
					player_enemy_spawn_layer.splice(i,1);
				}
			}
			for (let i=0;i<lower_object_layer.length;i++) {
				if (compare(lower_object_layer[i].tag,exceptions)) {
					lower_object_layer.splice(i,1);
				}
			}
			for (let i=0;i<background_layer.length;i++) {
				if (compare(background_layer[i].tag,exceptions)) {
					background_layer.splice(i,1);
				}
			}
			for (let i=0;i<collision_layer.length;i++) {
				if (compare(collision_layer[i].tag,exceptions)) {
					collision_layer.splice(i,1);
				}
			}
		}
		if (update_renderer) {
			main_object_array = collision_layer.concat(background_layer, lower_object_layer, player_enemy_spawn_layer, upper_object_layer, wall_layer, above_wall_layer, ui_layer);
		}
	};
	this.renderer = function() {
		ctx.clearRect(0, 0, resolution.width, resolution.height);
		for (let i=0;i<main_object_array.length;i++) {
			if (main_object_array[i].level_info == "all") {
				main_object_array[i].update();
			}
			if (typeof main_object_array[i].level_info == 'number' && main_object_array[i].level_info == level) {
				main_object_array[i].update();
			}
			if (typeof main_object_array[i].level_info == 'object') {
				if (typeof main_object_array[i].level_info.x == 'number' && level >= main_object_array[i].level_info.x && level <= main_object_array[i].level_info.y) {
					main_object_array[i].update();
				}
				if (main_object_array[i].level_info.x == "all" && level != main_object_array[i].level_info.y) {
					main_object_array[i].update();
				}
			}
		}
	};
	let camera_active = data.camera_active;
	if (data.camera_active != undefined) {
		camera_active = false;
	}
	//Player camera settings
	let camera_zoom = 100;
	let camera_position = new Vector2();

	this.component2d = function(name="", level_info="all", layer_data=new Vector2("collision","last"), pos=new Vector2(), rot=0, size=new Vector2(5,5), color=DEFAULT_COLOR, type="rec", tag=[""], shadow=NO_SHADOW, data=[]) {
		this.mode = "2D";
		this.name = name;
		this.level_info = level_info; //"all": shows up on all levels | number: shows up on this level only | Vector2(0,0): x- start level/"all"- all levels except y, y- end level
		this.layer_data = layer_data; // X: Name of layer Y: first: beginning of layer | last: end of layer | number: position in layer
		//Must be a vector2
		this.pos = pos;
		this.rot = deg_to_rad(rot);
		//Must be a vector2
		this.size = size;
		this.color = color;
		this.set_color = function(color="black") {
			this.color.color = color;
		};
		this.set_comp = function(comp="source-over") {
			this.color.comp = comp;
		};
		this.type = type;
		this.tag = tag;
		this.get_tag = function(tag="") {
			return this.tag.find(tag);
		};
		this.find_tag = function(tag="") {
			return this.tag.includes(tag);
		};
		this.add_tag = function(tag="") {
			this.tag.push(tag);
		};
		this.del_tag = function(tag="") {
			var index = this.tag.findIndex(tag);
			this.tag.splice(index,1);
		};
		this.shadow = shadow;
		/**
		Used for attaching data
		Known data
		let data = {
			radius:0,
			mass:0,
			lines:{
				stroke:true,
				stroke_color:"red",
				line_width:5,
				line_cap:"butt" || "round" || "square"
			},
			text:{
				font:"30px Arial",
				text_auto_size:true,
				text_align:"center"|"left"|"right",
				text:"String",
				text_color:"String",
				text_offset:new Vector2(),
				text_stroke:false,
				text_shadow:false
			},
			button:{
				on_click:"String"/function,
				outline:true,
				outline_shadow:false,
			}
		};
		**/
		this.data = data; //Change to a data array
		this.active_player = false;
		this.radius = (this.size.x/2);
		if (this.data.radius != undefined) {
			this.radius = this.data.radius;
		}
		this.points = [];
		//Button
		if (this.type == "button") {
			this.hover = false;
			this.clicked = false;
			this.on_click = "";
			if (!release) {
				this.on_click = "console.log('%cWARNING: Button-"+this.name+" does not have a function!','color:yellow')";	
			}
			this.outline = true;
			this.outline_shadow = false;
			if (this.data.button != undefined) {
				if (this.data.button.on_click != undefined) {
					this.on_click = this.data.button.on_click;
				}
				if (this.data.button.outline != undefined) {
					this.outline = this.data.button.outline;
				}
				if (this.data.button.outline_shadow != undefined) {
					this.outline_shadow = this.data.button.outline_shadow;
				}
			}
		}
		//Text objects
		if (this.type == "button" || this.type == "text") {
			this.font = "30px Arial";
			//make this data and add data font location in case you type the font differently
			this.font_name = ctx.font.split(" ")[1];
			this.text = this.name;
			this.text_shadow = false;
			this.text_stroke = false;
			this.text_align = "center";
			this.text_color = "black";
			this.text_offset = new Vector2();
			this.text_auto_size = true;
			if (this.data.text != undefined) {
				if (this.data.text.font != undefined) {
					this.font = this.data.text.font;
				}
				if (this.data.text.text != undefined) {
					this.text = this.data.text.text;
				}
				if (this.data.text.text_shadow != undefined) {
					this.text_shadow = this.data.text.text_shadow;
				}
				if (this.data.text.text_stroke != undefined) {
					this.text_stroke = this.data.text.text_stroke;
				}
				if (this.data.text.text_align != undefined) {
					this.text_align = this.data.text.text_align;
				}
				if (this.data.text.text_color != undefined) {
					this.text_color = this.data.text.text_color;
				}
				if (this.data.text.text_offset != undefined) {
					this.text_offset = this.data.text.text_offset;
				}
				if (this.data.text.text_auto_size != undefined) {
					this.text_auto_size = this.data.text.text_auto_size;
				}
			}
		}
		//Physics
		this.velocity = new Vector2();
		this.acceleration = new Vector2();
		this.friction = 10;
		this.elasticity = 1;
		this.mass = 0;
		this.inv_mass = 1/this.mass;
		if (this.mass == 0) {
			this.inv_mass = 0;
		}
		this.update = function() {
			ctx.imageSmoothingEnabled = image_smoothing;
			switch(this.type) {
				case "cir":
				ctx.globalAlpha = this.color.alpha;
				ctx.globalCompositeOperation = this.color.comp;
				if (shadows) {
					ctx.shadowColor = this.shadow.color;
					ctx.shadowBlur = this.shadow.blur;
					ctx.shadowOffsetX = this.shadow.offset.x;
					ctx.shadowOffsetY = this.shadow.offset.y;
				} else {
					ctx.shadowColor = NO_SHADOW.color;
					ctx.shadowBlur = NO_SHADOW.blur;
					ctx.shadowOffsetX = NO_SHADOW.offset.x;
					ctx.shadowOffsetY = NO_SHADOW.offset.y;
				}
				ctx.lineCap = "square";
				ctx.lineWidth = 2.5;
				if (this.data.lines != undefined && this.data.lines.stroke != undefined && this.data.lines.stroke) {
					if (this.data.lines.line_cap != undefined) {
						ctx.lineCap = this.data.lines.line_cap;
					}
					if (this.data.lines.line_width != undefined) {
						ctx.lineWidth = this.data.lines.line_width;
					}
				}
				ctx.beginPath();
				ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI*2);
				if (this.data.lines != undefined) {
					if (!this.data.lines.stroke) {
						ctx.fillStyle = this.color.color;
						ctx.fill();
					} else {
						ctx.strokeStyle = this.color.color;
						if (this.data.lines.stroke_color != undefined) {
							ctx.strokeStyle = this.data.lines.stroke_color;
						}
						ctx.stroke();
					}
				} else {
					ctx.fillStyle = this.color.color;
					ctx.fill();
				}
				break;
				case "rec":
				ctx.lineCap = "square";
				ctx.lineWidth = 2.5;
				if (this.data.lines != undefined && this.data.lines.stroke != undefined && this.data.lines.stroke) {
					if (this.data.lines.line_cap != undefined) {
						ctx.lineCap = this.data.lines.line_cap;
					}
					if (this.data.lines.line_width != undefined) {
						ctx.lineWidth = this.data.lines.line_width;
					}
				}
				ctx.beginPath();
				ctx.moveTo(this.points[0].x, this.points[0].y);
				for (let i=0;i<this.points.length;i++) {
					if (this.points[i] != undefined) {
						ctx.lineTo(this.points[i].x, this.points[i].y);
					}
				}
				if (this.data.lines != undefined) {
					if (!this.data.lines.stroke) {
						ctx.fillStyle = this.color.color;
						ctx.fill();
					} else {
						ctx.strokeStyle = this.color.color;
						if (this.data.lines.stroke_color != undefined) {
							ctx.strokeStyle = this.data.lines.stroke_color;
						}
						ctx.stroke();
					}
				} else {
					ctx.fillStyle = this.color.color;
					ctx.fill();
				}
				break;
				case "button":
				//Button body
				ctx.globalAlpha = this.color.alpha;
				ctx.globalCompositeOperation = this.color.comp;
				this.points = [
					this.pos.rotate_vector2(new Vector2(-this.size.x/2+this.pos.x, -this.size.y/2+this.pos.y), this.rot),
					this.pos.rotate_vector2(new Vector2(this.size.x/2+this.pos.x, -this.size.y/2+this.pos.y), this.rot),
					this.pos.rotate_vector2(new Vector2(this.size.x/2+this.pos.x, this.size.y/2+this.pos.y), this.rot),
					this.pos.rotate_vector2(new Vector2(-this.size.x/2+this.pos.x, this.size.y/2+this.pos.y), this.rot),
					this.pos.rotate_vector2(new Vector2(-this.size.x/2+this.pos.x, -this.size.y/2+this.pos.y), this.rot)];
				ctx.lineCap = "square";
				ctx.lineWidth = 2.5;
				if (this.data.lines != undefined && this.data.lines.stroke != undefined && this.data.lines.stroke) {
					if (this.data.lines.line_cap != undefined) {
						ctx.lineCap = this.data.lines.line_cap;
					}
					if (this.data.lines.line_width != undefined) {
						ctx.lineWidth = this.data.lines.line_width;
					}
				}
				ctx.beginPath();
				ctx.moveTo(this.points[0].x, this.points[0].y);
				for (let i=0;i<this.points.length;i++) {
					if (this.points[i] != undefined) {
						ctx.lineTo(this.points[i].x, this.points[i].y);
					}
				}
				if (this.data.lines != undefined) {
					if (!this.data.lines.stroke) {
						if (typeof this.color.color != "object") {
							if (!this.hover) {
								ctx.fillStyle = "lightgreen";
							} else {
								ctx.fillStyle = "lime";
							}
						} else {
							if (!this.hover) {
								ctx.fillStyle = this.color.color[0];
							} else {
								ctx.fillStyle = this.color.color[1];
							}
						}
						if (shadows) {
							ctx.shadowColor = this.shadow.color;
							ctx.shadowBlur = this.shadow.blur;
							ctx.shadowOffsetX = this.shadow.offset.x;
							ctx.shadowOffsetY = this.shadow.offset.y;
						} else {
							ctx.shadowColor = NO_SHADOW.color;
							ctx.shadowBlur = NO_SHADOW.blur;
							ctx.shadowOffsetX = NO_SHADOW.offset.x;
							ctx.shadowOffsetY = NO_SHADOW.offset.y;
						}
						ctx.fill();
						if (this.data.lines.stroke_color != undefined) {
							if (typeof this.data.lines.stroke_color != "object") {
								ctx.strokeStyle = "black";
							} else {
								if (!this.hover) {
									ctx.strokeStyle = this.data.lines.stroke_color[0];
								} else {
									ctx.strokeStyle = this.data.lines.stroke_color[1];
								}
							}
						} else {
							if (typeof this.color.color != "object") {
								ctx.strokeStyle = "black";
							} else {
								if (!this.hover) {
									ctx.strokeStyle = this.color.color[1];
								} else {
									ctx.strokeStyle = this.color.color[0];
								}
							}
						}
						ctx.stroke();
					} else {
						if (this.data.lines.stroke_color != undefined) {
							if (typeof this.data.lines.stroke_color != "object") {
								ctx.strokeStyle = "black";
							} else {
								if (!this.hover) {
									ctx.strokeStyle = this.data.lines.stroke_color[0];
								} else {
									ctx.strokeStyle = this.data.lines.stroke_color[1];
								}
							}
						} else {
							if (typeof this.color.color != "object") {
								ctx.strokeStyle = "black";
							} else {
								if (!this.hover) {
									ctx.strokeStyle = this.color.color[0];
								} else {
									ctx.strokeStyle = this.color.color[1];
								}
							}
						}
						ctx.stroke();
					}
				} else {
					if (typeof this.color.color != "object") {
						if (!this.hover) {
							ctx.fillStyle = "lightgreen";
						} else {
							ctx.fillStyle = "lime";
						}
					} else {
						if (!this.hover) {
							ctx.fillStyle = this.color.color[0];
						} else {
							ctx.fillStyle = this.color.color[1];
						}
					}
					if (shadows) {
						ctx.shadowColor = this.shadow.color;
						ctx.shadowBlur = this.shadow.blur;
						ctx.shadowOffsetX = this.shadow.offset.x;
						ctx.shadowOffsetY = this.shadow.offset.y;
					} else {
						ctx.shadowColor = NO_SHADOW.color;
						ctx.shadowBlur = NO_SHADOW.blur;
						ctx.shadowOffsetX = NO_SHADOW.offset.x;
						ctx.shadowOffsetY = NO_SHADOW.offset.y;
					}
					ctx.fill();
					if (typeof this.color.color != "object") {
						ctx.strokeStyle = "black";
					} else {
						if (!this.hover) {
							ctx.strokeStyle = this.color.color[1];
						} else {
							ctx.strokeStyle = this.color.color[0];
						}
					}
					ctx.stroke();
				}
				//Button text
				if (this.text_auto_size) {
					ctx.font = Math.abs(Math.floor((this.size.x*2)*(1/this.text.length)))+"px "+this.font_name;
				} else {
					ctx.font = this.font;
				}
				let height = ctx.measureText(this.text).actualBoundingBoxAscent;
				ctx.textAlign = this.text_align;
				if (this.data.text != undefined) {
					if (this.data.text.text_color != undefined) {
						if (!this.hover) {
							if (this.text_stroke) {
								ctx.strokeStyle = this.data.text.text_color[0];
							} else {
								ctx.fillStyle = this.data.text.text_color[0];
							}
						} else {
							if (this.text_stroke) {
								ctx.strokeStyle = this.data.text.text_color[1];
							} else {
								ctx.fillStyle = this.data.text.text_color[1];
							}
						}
					} else {
						if (!this.hover) {
							if (this.color.color[2] == undefined) {
								if (this.text_stroke) {
									ctx.strokeStyle = "black";
								} else {
									ctx.fillStyle = "black";
								}
							} else {
								if (this.text_stroke) {
									ctx.strokeStyle = this.color.color[2];
								} else {
									ctx.fillStyle = this.color.color[2];
								}
							}
						} else {
							if (this.color.color[3] == undefined) {
								if (this.text_stroke) {
									ctx.strokeStyle = "black";
								} else {
									ctx.fillStyle = "black";
								}
							} else {
								if (this.text_stroke) {
									ctx.strokeStyle = this.color.color[3];
								} else {
									ctx.fillStyle = this.color.color[3];
								}
							}
						}
					}
				} else {
					if (!this.hover) {
						if (this.color.color[2] == undefined) {
							if (this.text_stroke) {
								ctx.strokeStyle = "black";
							} else {
								ctx.fillStyle = "black";
							}
						} else {
							if (this.text_stroke) {
								ctx.strokeStyle = this.color.color[2];
							} else {
								ctx.fillStyle = this.color.color[2];
							}
						}
					} else {
						if (this.color.color[3] == undefined) {
							if (this.text_stroke) {
								ctx.strokeStyle = "black";
							} else {
								ctx.fillStyle = "black";
							}
						} else {
							if (this.text_stroke) {
								ctx.strokeStyle = this.color.color[3];
							} else {
								ctx.fillStyle = this.color.color[3];
							}
						}
					}
				}
				if (this.text_stroke) {
					ctx.strokeText(this.text,(this.pos.x+this.text_offset.x),(this.pos.y+this.text_offset.y)+(height/2));
				} else {
					ctx.fillText(this.text,(this.pos.x+this.text_offset.x),(this.pos.y+this.text_offset.y)+(height/2));
				}
				break;
			}
			//Physics
			if (this.mass == 0) {
				this.inv_mass = 0;
			} else {
				this.inv_mass = 1/this.mass;
			}
			this.acceleration = this.acceleration.unit().multi(this.acceleration.mag()); //Convert to unit
			this.velocity = this.velocity.add_v(this.acceleration.div(10)); // Add acceleration
			if (!camera_active) {
				this.pos = this.pos.add_v(this.velocity.multi(delta).div(100)); //Add velocity
			} else {
				if (!this.active_player) {
					this.pos = this.pos.add_v(camera_position);
				} else {
					let movement_pos = this.pos.add_v(this.velocity.multi(delta).div(100)); //Add velocity
					camera_position = this.pos.sub_v(movement_pos);
				}
			}
			this.new_friction = this.friction/100;
			this.velocity = this.velocity.multi(1-this.new_friction); //Multiply friction
		};
		//Show object
		this.show = function(alpha=1) {
			this.color.alpha = alpha;
		};
		//Hide object
		this.hide = function() {
			this.color.alpha = 0;
		};
		//Simple box collision
		this.box_collider = function(obj) {
			let top_1 = this.pos.y-(this.size.y/2);
			let bottom_1 = this.pos.y+(this.size.y/2);
			let left_1 = this.pos.x-(this.size.x/2);
			let right_1 = this.pos.x+(this.size.x/2);
			let top_2 = obj.pos.y-(obj.size.y/2);
			let bottom_2 = obj.pos.y+(obj.size.y/2);
			let left_2 = obj.pos.x-(obj.size.x/2);
			let right_2 = obj.pos.x+(obj.size.x/2);
			if (top_1 < top_2 && bottom_1 > bottom_2 && left_1 < left_2 && right_1 > right_2) {
				return true;
			} else {
				return false;
			}
		};
		//Circle collision
		this.circle_phys = function(obj) {
			if (this.circle_collider(obj)) {
				this.circle_pen_res(obj);
				this.circle_res(obj);
			}
		};
		this.circle_collider = function(obj) {
			let result = false;
			if (this.radius+obj.radius >= obj.pos.distance(this.pos).mag()) {
				result = true;
			}
			return result;
		};
		this.circle_pen_res = function(obj) {
			if (this.inv_mass == 0 && obj.inv_mass == 0) {
				this.inv_mass = 1;
			}
			let dist = this.pos.distance(obj.pos);
			let pen_depth = this.radius+obj.radius-dist.mag();
			let pen_res = dist.unit().multi(pen_depth/(this.inv_mass+obj.inv_mass));
			this.pos = this.pos.add_v(pen_res).multi(this.inv_mass);
			obj.pos = obj.pos.add_v(pen_res.multi(-obj.inv_mass));
		};
		this.circle_res = function(obj) {
			if (this.inv_mass == 0 && obj.inv_mass == 0) {
				this.inv_mass = 1;
			}
			let normal = this.pos.distance(obj.pos).unit();
			let rel_vel = this.velocity.sub_v(obj.velocity);
			let sep_vel = rel_vel.dot(normal);
			let new_sep_vel = -sep_vel*this.elasticity;
			let sep_vel_diff = new_sep_vel-sep_vel;
			let impulse = sep_vel_diff/(this.inv_mass+obj.inv_mass);
			let impulse_vector = normal.multi(impulse);
			this.velocity = this.velocity.add_v(impulse_vector.multi(this.inv_mass));
			obj.velocity = obj.velocity.add_v(impulse_vector.multi(-obj.inv_mass));
		};
		//Adds object to array
		switch(this.layer_data.x){
			case "ui":
				if (this.layer_data.y == "last") {
					ui_layer.push(this);
				}
				if (this.layer_data.y == "first") {
					ui_layer.unshift(this);
				}
				if (this.layer_data.y != "last" && this.layer_data.y != "first") {
					ui_layer.splice(this.layer_data.y,0,this);
				}
			break;
			case "above_wall":
				if (this.layer_data.y == "last") {
					above_wall_layer.push(this);
				}
				if (this.layer_data.y == "first") {
					above_wall_layer.unshift(this);
				}
				if (this.layer_data.y != "last" && this.layer_data.y != "first") {
					above_wall_layer.splice(this.layer_data.y,0,this);
				}
			break;
			case "wall":
				if (this.layer_data.y == "last") {
					wall_layer.push(this);
				}
				if (this.layer_data.y == "first") {
					wall_layer.unshift(this);
				}
				if (this.layer_data.y != "last" && this.layer_data.y != "first") {
					wall_layer.splice(this.layer_data.y,0,this);
				}
			break;
			case "upper_object":
				if (this.layer_data.y == "last") {
					upper_object_layer.push(this);
				}
				if (this.layer_data.y == "first") {
					upper_object_layer.unshift(this);
				}
				if (this.layer_data.y != "last" && this.layer_data.y != "first") {
					upper_object_layer.splice(this.layer_data.y,0,this);
				}
			break;
			case "player_enemy":
				if (this.layer_data.y == "last") {
					player_enemy_spawn_layer.push(this);
				}
				if (this.layer_data.y == "first") {
					player_enemy_spawn_layer.unshift(this);
				}
				if (this.layer_data.y != "last" && this.layer_data.y != "first") {
					player_enemy_spawn_layer.splice(this.layer_data.y,0,this);
				}
			break;
			case "lower_object":
				if (this.layer_data.y == "last") {
					lower_object_layer.push(this);
				}
				if (this.layer_data.y == "first") {
					lower_object_layer.unshift(this);
				}
				if (this.layer_data.y != "last" && this.layer_data.y != "first") {
					lower_object_layer.splice(this.layer_data.y,0,this);
				}
			break;
			case "background":
				if (this.layer_data.y == "last") {
					background_layer.push(this);
				}
				if (this.layer_data.y == "first") {
					background_layer.unshift(this);
				}
				if (this.layer_data.y != "last" && this.layer_data.y != "first") {
					background_layer.splice(this.layer_data.y,0,this);
				}
			break;
			case "collision":
				if (this.layer_data.y == "last") {
					collision_layer.push(this);
				}
				if (this.layer_data.y == "first") {
					collision_layer.unshift(this);
				}
				if (this.layer_data.y != "last" && this.layer_data.y != "first") {
					collision_layer.splice(this.layer_data.y,0,this);
				}
			break;
		}
	};
	//Get component2d by name and or tag
	this.get_component2d = function(layer_="main",name="undefined",tag="undefined") {
		switch(layer_){
			case "main":
				for (let i=0;i<main_object_array.length;i++) {
					if (name == "undefined") {
						//only tag
						if (main_object_array[i].find_tag(tag)) {
							return main_object_array[i];
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (main_object_array[i].name == name) {
								return main_object_array[i];
							}
						} else {
							//both
							if (main_object_array[i].find_tag(tag) && main_object_array[i].name == name) {
								return main_object_array[i];
							}
						}
					}
				}
			break;
			case "ui":
				for (let i=0;i<ui_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (ui_layer[i].find_tag(tag)) {
							return ui_layer[i];
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (ui_layer[i].name == name) {
								return ui_layer[i];
							}
						} else {
							//both
							if (ui_layer[i].find_tag(tag) && ui_layer[i].name == name) {
								return ui_layer[i];
							}
						}
					}
				}
			break;
			case "above_wall":
				for (let i=0;i<above_wall_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (above_wall_layer[i].find_tag(tag)) {
							return above_wall_layer[i];
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (above_wall_layer[i].name == name) {
								return above_wall_layer[i];
							}
						} else {
							//both
							if (above_wall_layer[i].find_tag(tag) && above_wall_layer[i].name == name) {
								return above_wall_layer[i];
							}
						}
					}
				}
			break;
			case "wall":
				for (let i=0;i<wall_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (wall_layer[i].find_tag(tag)) {
							return wall_layer[i];
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (wall_layer[i].name == name) {
								return wall_layer[i];
							}
						} else {
							//both
							if (wall_layer[i].find_tag(tag) && wall_layer[i].name == name) {
								return wall_layer[i];
							}
						}
					}
				}
			break;
			case "upper_object":
				for (let i=0;i<upper_object_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (upper_object_layer[i].find_tag(tag)) {
							return upper_object_layer[i];
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (upper_object_layer[i].name == name) {
								return upper_object_layer[i];
							}
						} else {
							//both
							if (upper_object_layer[i].find_tag(tag) && upper_object_layer[i].name == name) {
								return upper_object_layer[i];
							}
						}
					}
				}
			break;
			case "player_enemy":
				for (let i=0;i<player_enemy_spawn_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (player_enemy_spawn_layer[i].find_tag(tag)) {
							return player_enemy_spawn_layer[i];
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (player_enemy_spawn_layer[i].name == name) {
								return player_enemy_spawn_layer[i];
							}
						} else {
							//both
							if (player_enemy_spawn_layer[i].find_tag(tag) && player_enemy_spawn_layer[i].name == name) {
								return player_enemy_spawn_layer[i];
							}
						}
					}
				}
			break;
			case "lower_object":
				for (let i=0;i<lower_object_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (lower_object_layer[i].find_tag(tag)) {
							return lower_object_layer[i];
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (lower_object_layer[i].name == name) {
								return lower_object_layer[i];
							}
						} else {
							//both
							if (lower_object_layer[i].find_tag(tag) && lower_object_layer[i].name == name) {
								return lower_object_layer[i];
							}
						}
					}
				}
			break;
			case "background":
				for (let i=0;i<background_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (background_layer[i].find_tag(tag)) {
							return background_layer[i];
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (background_layer[i].name == name) {
								return background_layer[i];
							}
						} else {
							//both
							if (background_layer[i].find_tag(tag) && background_layer[i].name == name) {
								return background_layer[i];
							}
						}
					}
				}
			break;
			case "collision":
				for (let i=0;i<collision_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (collision_layer[i].find_tag(tag)) {
							return collision_layer[i];
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (collision_layer[i].name == name) {
								return collision_layer[i];
							}
						} else {
							//both
							if (collision_layer[i].find_tag(tag) && collision_layer[i].name == name) {
								return collision_layer[i];
							}
						}
					}
				}
			break;
		}
	};
	//Deletes by name and or tag
	this.delete_component2d = function(layer_="collision",name="undefined",tag="undefined",main=true) {
		for (let i=0;i<main_object_array.length;i++) {
			if (main) {
				if (name == "undefined") {
					//only tag
					if (main_object_array[i].find_tag(tag)) {
						main_object_array.splice(i,1);
					}
				} else {
					if (tag == "undefined") {
						//only name
						if (main_object_array[i].name == name) {
							main_object_array.splice(i,1);
						}
					} else {
						//both
						if (main_object_array[i].find_tag(tag) && main_object_array[i].name == name) {
							main_object_array.splice(i,1);
						}
					}
				}
			}
		}
		switch(layer_){
			case "ui":
				for (let i=0;i<ui_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (ui_layer[i].find_tag(tag)) {
							ui_layer.splice(i,1);
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (ui_layer[i].name == name) {
								ui_layer.splice(i,1);
							}
						} else {
							//both
							if (ui_layer[i].find_tag(tag) && ui_layer[i].name == name) {
								ui_layer.splice(i,1);
							}
						}
					}
				}
			break;
			case "above_wall":
				for (let i=0;i<above_wall_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (above_wall_layer[i].find_tag(tag)) {
							above_wall_layer.splice(i,1);
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (above_wall_layer[i].name == name) {
								above_wall_layer.splice(i,1);
							}
						} else {
							//both
							if (above_wall_layer[i].find_tag(tag) && above_wall_layer[i].name == name) {
								above_wall_layer.splice(i,1);
							}
						}
					}
				}
			break;
			case "wall":
				for (let i=0;i<wall_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (wall_layer[i].find_tag(tag)) {
							wall_layer.splice(i,1);
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (wall_layer[i].name == name) {
								wall_layer.splice(i,1);
							}
						} else {
							//both
							if (wall_layer[i].find_tag(tag) && wall_layer[i].name == name) {
								wall_layer.splice(i,1);
							}
						}
					}
				}
			break;
			case "upper_object":
				for (let i=0;i<upper_object_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (upper_object_layer[i].find_tag(tag)) {
							upper_object_layer.splice(i,1);
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (upper_object_layer[i].name == name) {
								upper_object_layer.splice(i,1);
							}
						} else {
							//both
							if (upper_object_layer[i].find_tag(tag) && upper_object_layer[i].name == name) {
								upper_object_layer.splice(i,1);
							}
						}
					}
				}
			break;
			case "player_enemy":
				for (let i=0;i<player_enemy_spawn_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (player_enemy_spawn_layer[i].find_tag(tag)) {
							player_enemy_spawn_layer.splice(i,1);
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (player_enemy_spawn_layer[i].name == name) {
								player_enemy_spawn_layer.splice(i,1);
							}
						} else {
							//both
							if (player_enemy_spawn_layer[i].find_tag(tag) && player_enemy_spawn_layer[i].name == name) {
								player_enemy_spawn_layer.splice(i,1);
							}
						}
					}
				}
			break;
			case "lower_object":
				for (let i=0;i<lower_object_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (lower_object_layer[i].find_tag(tag)) {
							lower_object_layer.splice(i,1);
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (lower_object_layer[i].name == name) {
								lower_object_layer.splice(i,1);
							}
						} else {
							//both
							if (lower_object_layer[i].find_tag(tag) && lower_object_layer[i].name == name) {
								lower_object_layer.splice(i,1);
							}
						}
					}
				}
			break;
			case "background":
				for (let i=0;i<background_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (background_layer[i].find_tag(tag)) {
							background_layer.splice(i,1);
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (background_layer[i].name == name) {
								background_layer.splice(i,1);
							}
						} else {
							//both
							if (background_layer[i].find_tag(tag) && background_layer[i].name == name) {
								background_layer.splice(i,1);
							}
						}
					}
				}
			break;
			case "collision":
				for (let i=0;i<collision_layer.length;i++) {
					if (name == "undefined") {
						//only tag
						if (collision_layer[i].find_tag(tag)) {
							collision_layer.splice(i,1);
						}
					} else {
						if (tag == "undefined") {
							//only name
							if (collision_layer[i].name == name) {
								collision_layer.splice(i,1);
							}
						} else {
							//both
							if (collision_layer[i].find_tag(tag) && collision_layer[i].name == name) {
								collision_layer.splice(i,1);
							}
						}
					}
				}
			break;
		}
	};
	
	//Keyboard
	let keys = [];
	this.get_keys = function() {
		return keys;
	};
	this.get_keys_by_id = function(id) {
		if (id == undefined) {
			return keys;
		} else {
			for (let i=0;i<keys.length;i++) {
				if (keys[i].id == id) {
					return keys[i];
				}
			}
		}
	};
	let keyboard_pressed = {};
	this.get_key_pressed = function() {
		return keyboard_pressed;
	};
	let key_hit = false;
	let lock_contols = false;
	//Add key to array
	//object_data = {
	//	id:"String",
	//	name:"String",
	//	message:"String"
	//};
	//key_data = {
	//	key:"Sting"/Number,
	//	type:"key"|"which"|"code",
	//	location:0
	//};
	this.add_key = function(id="key", object_data=null, key_data, run_when_paused=true, on_down="", on_up="", tag="") {
		this.id = id;
		this.object_data = object_data;
		this.key_data = key_data;
		this.run_when_paused = run_when_paused;
		this.on_down = on_down;
		this.on_up = on_up;
		this.pressed = false;
		this.tag = tag;
		this.locked = false;
		this.save = function() {
			localStorage.setItem(this.id, JSON.stringify(this.key_data));
			if (!release) {
				console.log("%cSaved key: "+this.id+" Data: "+JSON.stringify(this.key_data)+"!", "color:green");
			}
		};
		this.load = function() {
			if (localStorage.getItem(this.id) != null) {
				this.key_data = JSON.parse(localStorage.getItem(this.id));
				if (!release) {
					console.log("%cKey: "+this.id+" loaded!", "color:green");
				}
			} else {
				if (!release) {
					console.log("%cKey: "+this.id+" using default value!", "color:green");
				}
			}
		};
		this.set_text = function() {
			if (this.object_data != "" && this.object_data != null && this.object_data != false) {
				let object = document.getElementById(this.object_data.id);
			}
			if (this.locked) {
				if (this.object_data != "" && this.object_data != null && this.object_data != false) {
					if (this.object_data.message == undefined) {
						object.innerHTML = "Hit Any Key!";
					} else {
						object.innerHTML = this.object_data.message;
					}
					if (key_hit) {
						this.key_data.key = eval("keyboard_pressed."+this.key_data.type);
						this.key_data.location = keyboard_pressed.location;
						lock_contols = false;
						this.save();
						this.locked = false;
						key_hit = false;
					}
				} else {
					if (key_hit) {
						this.key_data.key = eval("keyboard_pressed."+this.key_data.type);
						this.key_data.location = keyboard_pressed.location;
						lock_contols = false;
						this.save();
						this.locked = false;
						key_hit = false;
					}
				}
			} else {
				if (this.object_data != "" && this.object_data != null && this.object_data != false) {
					object.innerHTML = this.object_data.name+": "+this.key_data.key.toUpperCase();
				}
			}
		};
		keys.push(this);
	};
	//Save all keys
	this.save_keys = function() {
		for (let i=0;i<keys.length;i++) {
			keys[i].save();
		}
	};
	//Load all keys
	this.load_keys = function() {
		for (let i=0;i<keys.length;i++) {
			keys[i].load();
		}
	};
	//Delete key from array
	this.delete_key = function(id) {
		for (let i=0;i<keys.length;i++) {
			if (keys[i].id == id) {
				keys.splice(i,1);
			}
		}
	};
	//Sets a key
	this.set_key = function(id) {
		lock_contols = true;
		for (let i=0;i<keys.length;i++) {
			if (keys[i].id == id) {
				keys[i].locked = true;
			} else {
				keys[i].locked = false;
			}
		}
	};
	//Runs key down function
	this.key_down = function(event) {
		let key_pressed = event.key;
		let location_pressed = event.location;
		let which_pressed = event.which;
		let code_pressed = event.code;
		if (!release) {
			console.log("%cPressed: Key-"+key_pressed+" Location-"+location_pressed+" Which-"+which_pressed+" Code-"+code_pressed, "color:blue");
		}
		if (lock_contols) {
			keyboard_pressed = {"key":key_pressed,"location":location_pressed,"which":which_pressed,"code":code_pressed};
			key_hit = true;
		}
		for (let i=0;i<keys.length;i++) {
			if (keys[i] != undefined && keys[i].key_data != undefined) {
				if (keys[i].key_data.location == undefined) {
					if (eval(keys[i].key_data.type+"_pressed") == keys[i].key_data.key) {
						if (keys[i].run_when_paused) {
							eval(keys[i].on_down);
							keys[i].pressed = true;
						} else {
							if (!paused) {
								eval(keys[i].on_down);
								keys[i].pressed = true;
							}
						}
					}
				} else {
					if (keys[i].key_data.location == location_pressed) {
						if (eval(keys[i].key_data.type+"_pressed") == keys[i].key_data.key) {
							if (keys[i].run_when_paused) {
								eval(keys[i].on_down);
								keys[i].pressed = true;
							} else {
								if (!paused) {
									eval(keys[i].on_down);
									keys[i].pressed = true;
								}
							}
						}
					}
				}
			}
		}
	};
	//Runs key up function
	this.key_up = function(event) {
		let key_pressed = event.key;
		let location_pressed = event.location;
		let which_pressed = event.which;
		let code_pressed = event.code;
		if (!release) {
			console.log("%cReleased: Key-"+key_pressed+" Location-"+location_pressed+" Which-"+which_pressed+" Code-"+code_pressed, "color:blue");
		}
		for (let i=0;i<keys.length;i++) {
			if (keys[i] != undefined && keys[i].key_data != undefined) {
				if (keys[i].key_data.location == undefined) {
					if (eval(keys[i].key_data.type+"_pressed") == keys[i].key_data.key) {
						eval(keys[i].on_up);
						keys[i].pressed = false;
					}
				} else {
					if (keys[i].key_data.location == location_pressed) {
						if (eval(keys[i].key_data.type+"_pressed") == keys[i].key_data.key) {
							eval(keys[i].on_up);
							keys[i].pressed = false;
						}
					}
				}
			}
		}
	};

	this.update_loop = function() {
		//Cursor update
		for (let i=0;i<ui_layer.length;i++) {
			if (ui_layer[i].name == "cursor") {
				if (ui_layer[i].find_tag("debug")) {
					ui_layer[i].pos.x = mouse_pos.x/local_scale_native_res.width;
					ui_layer[i].pos.y = mouse_pos.y/local_scale_native_res.height;
					if (show_cursor_debug) {
						ui_layer[i].show();
						if (mouse_pressed[0]) {
							ui_layer[i].set_color("green");
						}
						if (mouse_pressed[1]) {
							ui_layer[i].set_color("yellow");
						}
						if (mouse_pressed[2]) {
							ui_layer[i].set_color("orange");
						}
						if (!mouse_pressed[0] && !mouse_pressed[1] && !mouse_pressed[2]) {
							ui_layer[i].set_color("red");
						}
					} else {
						ui_layer[i].hide();
					}
				}
				if (ui_layer[i].find_tag("cursor")) {
					ui_layer[i].pos.x = mouse_pos.x/local_scale_native_res.width;
					ui_layer[i].pos.y = mouse_pos.y/local_scale_native_res.height;
				}
			}
		}
		//Button update
		for (let i=0;i<ui_layer.length;i++) {
			//Button
			if (ui_layer[i].type == "button") {
				for (let j=0;j<ui_layer.length;j++) {
					if (ui_layer[j].name == "cursor") {
						if (ui_layer[j].find_tag("debug")) {
							if (ui_layer[i].box_collider(ui_layer[j])) {
								ui_layer[i].hover = true;
							} else {
								ui_layer[i].hover = false;
							}
						}
						if (ui_layer[j].find_tag("cursor")) {
							if (ui_layer[i].box_collider(ui_layer[j])) {
								ui_layer[i].hover = true;
							} else {
								ui_layer[i].hover = false;
							}
						}
					}
				}
				if (ui_layer[i].hover && mouse_pressed[0]) {
					if (!ui_layer[i].clicked) {
						eval(ui_layer[i].on_click);
						ui_layer[i].clicked = true;
					}
				}
				if (!ui_layer[i].hover || !mouse_pressed[0]) {
					ui_layer[i].clicked = false;
				}
			}
		}
		//Key update
		for (let i=0;i<keys.length;i++) {
			//Gets rid of trash
			keys = keys.filter(keys => keys.id != undefined);
			//Updates key text
			keys[i].set_text();
		}
		//Timer update
		for (let i=0;i<timers.length;i++) {
			timers[i].update();
			if (timers[i].bool) {
				if (timers[i].once) {
					timers.splice(i,1);
				} else {
					timers[i].reset();
				}
			}
		}
	};
}

function loading_screen() {
	
}

/**
//Saves jsons to local storage
//Name must be the let name
function saveData(name, data) {
	if (typeof(Storage) !== "undefined") {
	localStorage.setItem(name, JSON.stringify(data));
	console.log("%cSaved "+name+" data!", "color: green");
	} else {
	console.error("Couldn't save data!");
	}
}

//Loads jsons from local storage
function loadData(name) {
let data = JSON.parse(localStorage.getItem(name));
	if (typeof(Storage) !== "undefined") {
		if (data != null) {
			if (name == "unlocks") {
			unlocks = data;
			}
			if (name == "save_data") {
			save_data = data;
			}
		console.log("%cLoaded "+name+" data!", "color: green");
		} else {
		console.log("%cNo saved data in "+name+"!", "color: red");
		}
	} else {
	console.error("Couldn't load data!");
	}
}

//Main component maker
function component(waveNumber, width, height, color, x, y, type, globalAlpha, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, op1, op2, op3, op4, tag) {
if (this.type != "light") {
this.radius = (this.width/2);
}
//New Movement
this.speed = 0;
this.moveAngle = 0;
//Legacy Movement for AI
this.legacy_Movement = false;
this.legacy_Speed_X = 0;
this.legacy_Speed_Y = 0;
//For AI
this.aiSpeed = 0;
//Rotation
this.angle = 0;
this.rotateSpeed = 0;
this.animationFrame = 0;
this.alive = true;
this.ship = 0;
this.health = 0;
this.maxHealth = 0;
this.healthBarColor = "";
this.healthBarLength = this.health/(this.maxHealth/100);
this.weapon = 0;
this.weaponName = "";
this.ammo = 0;
this.maxAmmo = 0;
this.money = 0;
this.totalMoney = 0;
this.bulletImage = "";
this.bullets = [];
this.bulletSize = 0;
this.bulletSpeed = 0;
this.bulletAliveTime = 0;
this.bulletMaxTime = 0;
this.damage = 0;
this.points = [];
	this.distance = function(point_1, point_2) {
	let dx = point_1.x-point_2.x;
	let dy = point_1.y-point_2.y;
	return Math.sqrt((dx*dx)+(dy*dy));
	},
	this.rotatePoints = function(point_X, point_Y, XorY) {
	this.XorY = XorY;
		if (this.XorY == "x") {
		return Math.cos(this.angle)*(point_X-this.x)-Math.sin(this.angle)*(point_Y-this.y)+this.x;
		} else
		if (this.XorY == "y") {
		return Math.sin(this.angle)*(point_X-this.x)+Math.cos(this.angle)*(point_Y-this.y)+this.y;
		}
	},
	this.getTextWidth = function() {
	ctx.font = this.width;
	return ctx.measureText(this.op2).width;
	}
	this.update = function() {
		for (let i=0;i<this.bullets.length;i++) {
		this.bullets[i].update();
		this.bullets[i].newPos();
		}
		switch (this.type) {
			case "text":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor;
			ctx.shadowBlur = this.shadowBlur;
			ctx.shadowOffsetX = this.shadowOffsetX;
			ctx.shadowOffsetY = this.shadowOffsetY;
			ctx.font = this.width;
			ctx.textAlign = this.height;
			ctx.fillStyle = this.color;
				if (!this.op1) {
				ctx.fillText(this.op2, this.x, this.y);
				}
				if (this.op1) {
				ctx.strokeText(this.op2, this.x, this.y);
				}
			break;
			case "line":
			ctx.beginPath();
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor;
			ctx.shadowBlur = this.shadowBlur;
			ctx.shadowOffsetX = this.shadowOffsetX;
			ctx.shadowOffsetY = this.shadowOffsetY;
			ctx.lineWidth = this.width;
			ctx.lineCap = this.height;
			ctx.strokeStyle = this.color; 
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.op1, this.op2);
			ctx.stroke();
			break;
			case "path":
			ctx.beginPath();
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.lineWidth = this.width;
			ctx.lineCap = this.height;
			ctx.strokeStyle = this.color;
				if (typeof this.x != "undefined" && typeof this.x[0] != "undefined") {
				ctx.moveTo(this.x[0][0]*scale, this.x[0][1]*scale);
					for (let i = 1; i < this.x.length; i++) {
					ctx.lineTo(this.x[i][0]*scale, this.x[i][1]*scale);
					}
				}
			ctx.stroke();
			break;
			case "light":
			ctx.globalAlpha = this.globalAlpha;
			ctx.beginPath();
			let gradient = ctx.createRadialGradient(this.x, this.y, this.height[0], this.x, this.y, this.height[1]);
			gradient.addColorStop(0, this.color[0]);
			gradient.addColorStop(1, this.color[1]);
			ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
			ctx.ellipse(this.x, this.y, this.width[0], this.width[0], this.angle, 0, 2 * Math.PI);
			ctx.fillStyle = gradient;
			ctx.fill();
			break;
			case "img":
			this.img = document.getElementById(this.color);
			if (this.op1 == undefined || this.op1 == "") {
			this.op1 = 0;
			}
			if (this.op2 == undefined || this.op2 == "") {
			this.op2 = 0;
			}
			if (this.op3 == undefined || this.op3 == "") {
			this.op3 = this.img.width;
			}
			if (this.op4 == undefined || this.op4 == "") {
			this.op4	= this.img.height;
			}
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor;
			ctx.shadowBlur = this.shadowBlur;
			ctx.shadowOffsetX = this.shadowOffsetX;
			ctx.shadowOffsetY = this.shadowOffsetY;
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(this.angle);
			ctx.drawImage(this.img, this.op1, this.op2, this.op3, this.op4, this.width/-2, this.height/-2, this.width, this.height);
			ctx.restore();
			break;
			case "house":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor;
			ctx.shadowBlur = this.shadowBlur;
			ctx.shadowOffsetX = this.shadowOffsetX;
			ctx.shadowOffsetY = this.shadowOffsetY;
			this.points = [{x:this.rotatePoints(this.x+this.width/2, this.y-this.height/2, "x"),y:this.rotatePoints(this.x+this.width/2, this.y-this.height/2, "y")}
			,{x:this.rotatePoints(this.x-this.width/2, this.y-this.height/2, "x"),y:this.rotatePoints(this.x-this.width/2, this.y-this.height/2, "y")}
			,{x:this.rotatePoints(this.x-this.width/2, this.y+this.height/2, "x"),y:this.rotatePoints(this.x-this.width/2, this.y+this.height/2, "y")}
			,{x:this.rotatePoints(this.x+this.op1-this.op2/2, this.y+this.height/2, "x"),y:this.rotatePoints(this.x+this.op1-this.op2/2, this.y+this.height/2, "y")}
			,{x:this.rotatePoints(this.x+this.op1-this.op2/2, this.y+this.height/2-this.op3, "x"),y:this.rotatePoints(this.x+this.op1-this.op2/2, this.y+this.height/2-this.op3, "y")}
			,{x:this.rotatePoints(this.x-this.width/2+this.op3, this.y+this.height/2-this.op3, "x"),y:this.rotatePoints(this.x-this.width/2+this.op3, this.y+this.height/2-this.op3, "y")}
			,{x:this.rotatePoints(this.x-this.width/2+this.op3, this.y-this.height/2+this.op3, "x"),y:this.rotatePoints(this.x-this.width/2+this.op3, this.y-this.height/2+this.op3, "y")}
			,{x:this.rotatePoints(this.x+this.width/2-this.op3, this.y-this.height/2+this.op3, "x"),y:this.rotatePoints(this.x+this.width/2-this.op3, this.y-this.height/2+this.op3, "y")}
			,{x:this.rotatePoints(this.x+this.width/2-this.op3, this.y+this.height/2-this.op3, "x"),y:this.rotatePoints(this.x+this.width/2-this.op3, this.y+this.height/2-this.op3, "y")}
			,{x:this.rotatePoints(this.x+this.op1+this.op2/2, this.y+this.height/2-this.op3, "x"),y:this.rotatePoints(this.x+this.op1+this.op2/2, this.y+this.height/2-this.op3, "y")}
			,{x:this.rotatePoints(this.x+this.op1+this.op2/2, this.y+this.height/2, "x"),y:this.rotatePoints(this.x+this.op1+this.op2/2, this.y+this.height/2, "y")}
			,{x:this.rotatePoints(this.x+this.width/2, this.y+this.height/2, "x"),y:this.rotatePoints(this.x+this.width/2, this.y+this.height/2, "y")}
			,this.points[0]];
			ctx.beginPath();
			ctx.moveTo(this.points[0].x, this.points[0].y);
				for (let i=0;i<this.points.length;i++) {
					if (this.points[i] != undefined) {
					ctx.lineTo(this.points[i].x, this.points[i].y);
					}
				}
			ctx.fillStyle = this.color;
			ctx.fill();
			break;
		}
	},
	this.shoot = function(angle) {
		if (this.alive && !game_data.pause && game_data.wave > 0 && this.ammo > 0) {
			let _bullet = new component(this.waveNumber, this.bulletSize, this.bulletSize, this.bulletImage, this.x, this.y, this.type, 1);
			_bullet.moveAngle = angle;
			_bullet.damage = this.damage;
			_bullet.bulletMaxTime = this.bulletMaxTime;
			_bullet.speed = this.bulletSpeed;
			this.ammo--;
			this.bullets.push(_bullet);
		}
	},
	//update position
	this.newPos = function() {
		this.healthBarLength = this.health/(this.maxHealth/100);
		//Change health bar color
		if (this.healthBarLength > 75) {
		this.healthBarColor = "darkgreen";
		}
		if (this.healthBarLength <= 75) {
		this.healthBarColor = "green";
		}
		if (this.healthBarLength <= 50) {
		this.healthBarColor = "yellow";
		}
		if (this.healthBarLength <= 25) {
		this.healthBarColor = "orange";
		}
		if (this.healthBarLength <= 10) {
		this.healthBarColor = "red";
		}
		if (this.healthBarLength <= 0) {
		this.healthBarColor = "darkred";
		}
		//Check health max
		if (this.health > this.maxHealth) {
		this.health = this.maxHealth;
		}
		if (this.alive) {
		//Set stats
		this.radius = (this.width/2)+5;
		this.angle += this.rotateSpeed;
			if (!this.legacy_Movement) {
			this.x += (Math.round(this.speed)*Math.sin(this.moveAngle));
			this.y += (Math.round(-this.speed)*Math.cos(this.moveAngle));
			} else {
			this.x += this.legacy_Speed_X;
			this.y += this.legacy_Speed_Y;
			}
			//Bullet collisions
			for (let i=0;i<this.bullets.length;i++) {
				if (this.bullets[i] != undefined) {
					if (this.bullets[i].x < 0 || this.bullets[i].x > 800 || this.bullets[i].y < 0 || this.bullets[i].y > 390) {
					this.bullets.splice(i,1);
					}
				}
				/**for (let j=0;j<houseCollisionUpdaters.length;j++) {
					if (houseCollisionUpdaters[j].object2.waveNumber == "all") {
						if (this.bullets[i] != undefined && this.bullets[i].circleLine(houseCollisionUpdaters[j].object2)) {
						this.bullets.splice(i,1);
						}
					}
					if (houseCollisionUpdaters[j].object2.waveNumber[0] == "all" && houseCollisionUpdaters[j].object2.waveNumber[1] > game_data.wave) {
						if (this.bullets[i] != undefined && this.bullets[i].circleLine(houseCollisionUpdaters[j].object2)) {
						this.bullets.splice(i,1);
						}
					}
					if (game_data.wave >= houseCollisionUpdaters[j].object2.waveNumber[0] && game_data.wave <= houseCollisionUpdaters[j].object2.waveNumber[1]) {
						if (this.bullets[i] != undefined && this.bullets[i].circleLine(houseCollisionUpdaters[j].object2)) {
						this.bullets.splice(i,1);
						}
					}
				}**//**
				if (this.bullets[i] != undefined && this.bullets[i].bulletAliveTime < this.bullets[i].bulletMaxTime) {
				this.bullets[i].bulletAliveTime++;
				}
				if (this.bullets[i] != undefined && this.bullets[i].bulletAliveTime >= this.bullets[i].bulletMaxTime) {
				this.bullets.splice(i,1);
				}
			}
		} else {
		this.bullets = [];
		}
	},
	//collisions
	//rectangle vs. rectangle
	this.crashWith = function(otherobj) {
	let r1 = ((this.x-this.width/2) + this.width);
	let b1 = ((this.y-this.height/2) + this.height);
	let r2 = ((otherobj.x-otherobj.width/2) + otherobj.width);
	let b2 = ((otherobj.y-otherobj.height/2) + otherobj.height);
		if (b1 < otherobj.y-otherobj.height/2 || this.y-this.height/2 > b2 || r1 < otherobj.x-otherobj.width/2 || this.x-this.width/2 > r2) {
		return false;
		} else {
		return true;
		}
	},
	//circle vs. circle
	this.circleCrashWith = function(otherobj) {
	let distance_x = (this.x-otherobj.x);
	let distance_y = (this.y-otherobj.y);
	let rSum = (this.radius+otherobj.radius);
		if (((distance_x*distance_x)+(distance_y*distance_y)) <= (rSum*rSum)) { 
		return true;
		} else {
		return false;
		}
	},
	//get direction of an object
	this.getDir = function(otherobj, return_, insideHouse) {
	this.otherobj = otherobj;
	this.return_ = return_;
	this.insideHouse = insideHouse;
	let result = "";
	this.anglef = (Math.atan2(-this.y+this.otherobj.y, -this.x+this.otherobj.x)+1.57079633).toFixed(2);
		if (!this.return_) {
			if (this.anglef > 5.89 && this.anglef <= 6.28) {
			result = "North";
			}
			if (this.anglef <= 0 && this.anglef > -0.39) {
			result = "North";
			}
			if (this.anglef >= 0 && this.anglef < 0.39) {
			result = "North";
			}
			if (this.anglef <= -0.39 && this.anglef >= -1.17) {
				if (this.insideHouse) {
				result =  "NorthEast";
				} else {
				result =  "NorthWest";
				}
			}
			if (this.anglef >= 0.39 && this.anglef <= 1.17) {
			result =  "NorthEast";
			}
			if (this.anglef > 1.17 && this.anglef < 1.96) {
			result = "East";
			}
			if (this.anglef >= 1.96 && this.anglef <= 2.74) {
			result = "SouthEast";
			}
			if (this.anglef > 2.74 && this.anglef < 3.53) {
			result = "South";
			}
			if (this.anglef >= 3.53 && this.anglef <= 4.31) {
			result = "SouthWest";
			}
			if (this.anglef == -1.57) {
			result = "West";
			}
			if (this.anglef > 4.31 && this.anglef < 5.10) {
			result = "West";
			}
			if (this.anglef >= 5.10 && this.anglef <= 5.89) {
			result = "NorthWest";
			}
		} else {
		result = this.anglef;
		}
		return result;
	},
	//circle vs. line
	this.circleLine = function(otherobj, act, house) {
	this.otherobj = otherobj;
	this.act = act;
	this.house = house;
	if (this.house) {
		if (otherobj.points.length != 0) {
			let topSide = this.getClosestPointOnLines({x:this.x,y:this.y}, [otherobj.points[6],otherobj.points[7]]);
			let bottomSide = this.getClosestPointOnLines({x:this.x,y:this.y}, [otherobj.points[5],otherobj.points[8]]);
			let leftSide = this.getClosestPointOnLines({x:this.x,y:this.y}, [otherobj.points[5],otherobj.points[6]]);
			let rightSide = this.getClosestPointOnLines({x:this.x,y:this.y}, [otherobj.points[7],otherobj.points[8]]);
			let topLeftDir = this.getDir(otherobj.points[6], false, true);
			let topLeftDir2 = this.getDir(otherobj.points[6], true, true);
			let topRightDir = this.getDir(otherobj.points[7], false, true);
			let bottomLeftDir = this.getDir(otherobj.points[5], false, true);
			let bottomRightDir = this.getDir(otherobj.points[8], false, true);
			let topSideDist = this.distance(topSide, this);
			let bottomSideDist = this.distance(bottomSide, this);
			let leftSideDist = this.distance(leftSide, this);
			let rightSideDist = this.distance(rightSide, this);
		}
	}
	let t = this.getClosestPointOnLines({x:this.x,y:this.y}, otherobj.points);
	let dir = this.getDir(t, false, false);
	let distance = this.distance(t, this);
	let topLeftCheck = false;
	let topRightCheck = false;
	let bottomLeftCheck = false;
	let bottomRightCheck = false;
		if (distance <= this.radius) {
			if (this.act) {
				if (this.house) {
					if (Math.abs(leftSide.x-topSide.x) <= this.radius && Math.abs(leftSide.x-topSide.x) > 5 && Math.abs(leftSide.y-topSide.y) <= this.radius && Math.abs(leftSide.y-topSide.y) > 5) {
						if (topLeftDir == "NorthEast") {
						this.x = this.x+Math.abs(leftSideDist-this.radius);
						this.y = this.y+Math.abs(topSideDist-this.radius);
						}
						if (topLeftDir == "NorthWest") {
						this.x = this.x-Math.abs(leftSideDist-this.radius);
						this.y = this.y+Math.abs(topSideDist-this.radius);
						}
						if (topLeftDir == "SouthWest") {
						this.x = this.x+Math.abs(leftSideDist-this.radius);
						this.y = this.y-Math.abs(topSideDist-this.radius);
						}
						if (topLeftDir == "SouthEast") {
						this.x = this.x-Math.abs(leftSideDist-this.radius);
						this.y = this.y-Math.abs(topSideDist-this.radius);
						}
					topLeftCheck = true;
					} else {
					topLeftCheck = false;
					}
					if (Math.abs(rightSide.x-topSide.x) <= this.radius && Math.abs(rightSide.x-topSide.x) > 5 && Math.abs(rightSide.y-topSide.y) <= this.radius && Math.abs(rightSide.y-topSide.y) > 5) {
						if (topRightDir == "NorthWest") {
						this.x = this.x+Math.abs(rightSideDist-this.radius);
						this.y = this.y+Math.abs(topSideDist-this.radius);
						}
						if (topRightDir == "NorthEast") {
						this.x = this.x-Math.abs(rightSideDist-this.radius);
						this.y = this.y+Math.abs(topSideDist-this.radius);
						}
						if (topRightDir == "SouthWest") {
						this.x = this.x+Math.abs(rightSideDist-this.radius);
						this.y = this.y-Math.abs(topSideDist-this.radius);
						}
						if (topRightDir == "SouthEast") {
						this.x = this.x-Math.abs(rightSideDist-this.radius);
						this.y = this.y-Math.abs(topSideDist-this.radius);
						}
					topRightCheck = true;
					} else {
					topRightCheck = false;
					}
					if (Math.abs(leftSide.x-bottomSide.x) <= this.radius && Math.abs(leftSide.x-bottomSide.x) > 5 && Math.abs(leftSide.y-bottomSide.y) <= this.radius && Math.abs(leftSide.y-bottomSide.y) > 5) {
						if (bottomLeftDir == "NorthWest") {
						this.x = this.x+Math.abs(leftSideDist-this.radius);
						this.y = this.y+Math.abs(bottomSideDist-this.radius);
						}
						if (bottomLeftDir == "NorthEast") {
						this.x = this.x-Math.abs(leftSideDist-this.radius);
						this.y = this.y+Math.abs(bottomSideDist-this.radius);
						}
						if (bottomLeftDir == "SouthWest") {
						this.x = this.x+Math.abs(leftSideDist-this.radius);
						this.y = this.y-Math.abs(bottomSideDist-this.radius);
						}
						if (bottomLeftDir == "SouthEast") {
						this.x = this.x-Math.abs(leftSideDist-this.radius);
						this.y = this.y-Math.abs(bottomSideDist-this.radius);
						}
					bottomLeftCheck = true;
					} else {
					bottomLeftCheck = false;
					}
					if (Math.abs(rightSide.x-bottomSide.x) <= this.radius && Math.abs(rightSide.x-bottomSide.x) > 5 && Math.abs(rightSide.y-bottomSide.y) <= this.radius && Math.abs(rightSide.y-bottomSide.y) > 5) {
						if (bottomRightDir == "NorthEast" || bottomRightDir == "East") {
						this.x = this.x+Math.abs(rightSideDist-this.radius);
						this.y = this.y+Math.abs(bottomSideDist-this.radius);
						}
						if (bottomRightDir == "NorthWest" || bottomRightDir == "West") {
						this.x = this.x-Math.abs(rightSideDist-this.radius);
						this.y = this.y+Math.abs(bottomSideDist-this.radius);
						}
						if (bottomRightDir == "SouthWest") {
						this.x = this.x+Math.abs(rightSideDist-this.radius);
						this.y = this.y-Math.abs(bottomSideDist-this.radius);
						}
						if (bottomRightDir == "SouthEast") {
						this.x = this.x-Math.abs(rightSideDist-this.radius);
						this.y = this.y-Math.abs(bottomSideDist-this.radius);
						}
					bottomRightCheck = true;
					} else {
					bottomRightCheck = false;
					}
				}
				if (!topLeftCheck && !topRightCheck && !bottomLeftCheck && !bottomRightCheck || !this.house) {
					if (dir == "NorthWest") {
					this.x = this.x+Math.abs(distance-this.radius);
					this.y = this.y+Math.abs(distance-this.radius);
					} else
					if (dir == "NorthEast") {
					this.x = this.x-Math.abs(distance-this.radius);
					this.y = this.y+Math.abs(distance-this.radius);
					} else
					if (dir == "SouthWest") {
					this.x = this.x+Math.abs(distance-this.radius);
					this.y = this.y-Math.abs(distance-this.radius);
					} else
					if (dir == "SouthEast") {
					this.x = this.x-Math.abs(distance-this.radius);
					this.y = this.y-Math.abs(distance-this.radius);
					}
					if (dir == "North") {
					this.y = this.y+Math.abs(distance-this.radius);
					} else
					if (dir == "South") {
					this.y = this.y-Math.abs(distance-this.radius);
					} else
					if (dir == "West") {
					this.x = this.x+Math.abs(distance-this.radius);
					} else
					if (dir == "East") {
					this.x = this.x-Math.abs(distance-this.radius);
					}
				}
			}
		return true;
		}
	return false;
	}
	//I got this from stack overflow! It works really well
	this.getClosestPointOnLines = function(pXy, aXys) {
	let minDist;
	let fTo;
	let x;
	let y;
	let i;
	let dist;
		if (aXys.length > 1) {
			for (let n = 1 ; n < aXys.length ; n++) {
				if (aXys[n] != undefined) {
					if (aXys[n].x != aXys[n - 1].x) {
					let a = (aXys[n].y - aXys[n - 1].y) / (aXys[n].x - aXys[n - 1].x);
					let b = aXys[n].y - a * aXys[n].x;
					dist = Math.abs(a * pXy.x + b - pXy.y) / Math.sqrt(a * a + 1);
					}
					else
					dist = Math.abs(pXy.x - aXys[n].x)
					let rl2 = Math.pow(aXys[n].y - aXys[n - 1].y, 2) + Math.pow(aXys[n].x - aXys[n - 1].x, 2);
					let ln2 = Math.pow(aXys[n].y - pXy.y, 2) + Math.pow(aXys[n].x - pXy.x, 2);
					let lnm12 = Math.pow(aXys[n - 1].y - pXy.y, 2) + Math.pow(aXys[n - 1].x - pXy.x, 2);
					let dist2 = Math.pow(dist, 2);
					let calcrl2 = ln2 - dist2 + lnm12 - dist2;
					if (calcrl2 > rl2)
						dist = Math.sqrt(Math.min(ln2, lnm12));
					if ((minDist == null) || (minDist > dist)) {
						if (calcrl2 > rl2) {
							if (lnm12 < ln2) {
							fTo = 0;
							}
							else {
							fTo = 1;
							}
						}
						else {
						fTo = ((Math.sqrt(lnm12 - dist2)) / Math.sqrt(rl2));
						}
					minDist = dist;
					i = n;
					}
				}
			}
		let dx = aXys[i - 1].x - aXys[i].x;
		let dy = aXys[i - 1].y - aXys[i].y;
		x = aXys[i - 1].x - (dx * fTo);
		y = aXys[i - 1].y - (dy * fTo);
		}
	return { 'x': x, 'y': y, 'i': i, 'fTo': fTo, 'line': aXys[i]};
	}
}
**/