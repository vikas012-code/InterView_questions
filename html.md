# 1.What is Semantic HTML and why it is useful
#   sementic html is a way to write html in sementic way in which sementic tags like header,aside,footer and artical etc are used
#   as name suggested these are use according to use of them

# 2.What is progressive rendering?
#  progressive rendering is a concept, which help fast render html,css and js
#  in progressive render we write code in that efficient way that important thing render fast and first so user feel fast and responsive webpage

# 3.Why is it generally a good idea to position CSS `<link>` between `<head></head>` and JS `<script>` just before `</body>`
#  becouse css is non blocking render and js is blocking so if js is also in head it will also start rendering with html,css which might block 
#  as all three start rendering at same time so that why js script is written in end befor body so it will start rendering after all html is 
#  rendered

# 4.What is the CSS Box Model
#  css box model is concept which help visualize contect or element in DOM in box model center have content then after that it is surrounded by
#  padding ,border and lastly margin

# 5.What's the difference between ``inline`` and ``inline-block``?
# inline element are those who take as much space as length of content and these element's wigth,hight and y axis margin and padding can't be given

# 6.What's the difference between a `relative`, `fixed`, `absolute` and `static` positioned element?
#  these are position property which a element can have 
#  static- this is default property is does't affect element and poition property like left,right,top and bottom can't be specified
#  relative- is a property which does't change position but all position property like left,,right,top and bottom can be specified
#  fixed- is property firstly remove element from document flow and its left,,right,top and bottom positioned according to screen and fixed in 
#          screen
#  absolute- is property also firstly remove element from document flow and this also positioned according to closest positioned
#        perent element but it is not fixed in screen