export interface RestaurantsInterface  {
location_id: string;
name: string;
latitude: string;
longitude: string;
num_reviews: string;
timezone: string;
location_string: string;
photo: Photo;
awards: any[];
doubleclick_zone: string;
preferred_map_engine: string;
raw_ranking: string;
ranking_geo: string;
ranking_geo_id: string;
ranking_position: string;
ranking_denominator: string;
ranking_category: string;
ranking: string;
distance: string;
distance_string: string;
bearing: string;
rating: string;
is_closed: boolean;
open_now_text: string;
is_long_closed: boolean;
price_level: string;
price: string;
description: string;
web_url: string;
write_review: string;
ancestors: Ancestor[];
category: Subcategory;
subcategory: Subcategory[];
parent_display_name: string;
is_jfy_enabled: boolean;
nearest_metro_station: any[];
reviews: null[];
phone: string;
website: string;
email: string;
address_obj: Addressobj;
address: string;
hours: Hours;
is_candidate_for_contact_info_suppression: boolean;
cuisine: Subcategory[];
dietary_restrictions: Subcategory[];
booking: Booking;
reserve_info: Reserveinfo;
establishment_types: Subcategory[];
}

interface Reserveinfo {
id: string;
provider: string;
provider_img: string;
url: string;
booking_partner_id?: any;
racable: boolean;
api_bookable: boolean;
timeslots?: any;
bestoffer?: any;
timeslot_offers?: any;
button_text: string;
disclaimer_text?: any;
banner_text?: any;
}

interface Booking {
provider: string;
url: string;
}

interface Hours {
week_ranges: Weekrange[][];
timezone: string;
}

interface Weekrange {
open_time: number;
close_time: number;
}

interface Addressobj {
street1: string;
street2?: any;
city: string;
state?: any;
country: string;
postalcode: string;
}

interface Ancestor {
subcategory: Subcategory[];
name: string;
abbrv?: any;
location_id: string;
}

interface Subcategory {
key: string;
name: string;
}

interface Photo {
images: Images;
is_blessed: boolean;
uploaded_date: string;
caption: string;
id: string;
helpful_votes: string;
published_date: string;
user: User;
}

interface User {
user_id?: any;
member_id: string;
type: string;
}

interface Images {
small: Small;
thumbnail: Small;
original: Small;
large: Small;
medium: Small;
}

interface Small {
width: string;
url: string;
height: string;
}
