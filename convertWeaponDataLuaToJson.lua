WeaponData = require 'weaponData'
json = require "json"

wp = json.encode(WeaponData)

print(wp)

-- Opens a file in append mode
file = io.open("weaponData.json", "w")

-- sets the default output file as test.lua
io.output(file)

-- appends a word test to the last line of the file
io.write(wp)

-- closes the open file
io.close(file)