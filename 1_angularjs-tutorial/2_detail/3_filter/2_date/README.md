# Filter

## date

Bộ lọc ngày AngularJS được sử dụng để chuyển đổi một ngày thành một định dạng được chỉ định. Khi định dạng ngày không được chỉ định, định dạng ngày mặc định là 'MM' d, yyyy’.

> {{ date | date : format : timezone }}

**Some common values used in format are as follow:**

'yyyy' – define year ex. 2019
'yy' – define year ex. 19
'y' – define year ex. 2019
'MMMM' – define month ex. April
'MMM' – define month ex. Apr
'MM' – define month ex. 04
'dd' – define day ex. 09
'd' – define day ex. 9
'hh' – define hour in AM/PM
'h' – define hour in AM/PM
'mm' – define minute
'm' – define minute
'ss' – define second
's' – define second

**Some predefined values for format are as follow:**

'short' – equivalent to 'M/d/yy h:mm a'
'medium' – equivalent to 'MMM d, y h:mm:ss a'
'shortDate' – equivalent to 'M/d/yy' (5/7/19)
'mediumDate' – equivalent to 'MMM d, y' (May 7, 2019)
'longDate' – equivalent to 'MMMM d, y' (May 7, 2019)
'fullDate' – equivalent to 'EEEE, MMMM d, y' (Tuesday, May 7, 2019)
'shortTime' – equivalent to 'h:mm a' (2:35 AM)
'mediumTime' – equivalent to 'h:mm:ss a' (2:35:05 AM)