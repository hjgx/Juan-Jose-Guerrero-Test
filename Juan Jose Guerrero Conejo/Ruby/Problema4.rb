=begin
 Juan Jose Guerrero
=end

nums = Array[1,2,1,3,3,1,2,1,5,1]
ocurrencias = Array["1:","2:","3:","4:","5:"]
Integer a = 5
Integer total=0

while a!=0 do
  total=0
  total = nums.select { |x| x == a }.length
  a =  a- 1
  while total != 0
    ocurrencias[a] = ocurrencias[a] + "*"
    total=total-1
  end
end

puts(ocurrencias)