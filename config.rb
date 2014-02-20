# Require any additional compass plugins here.
require "susy"

# Settings
css_dir = "assets"        
sass_dir = "sass"
images_dir = "assets"
javascripts_dir = "js"
fonts_dir = "fonts"

output_style = :nested

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = true
color_output = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run from within the 'prospr' folder (and no deeper):
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
# sass lovers must then remember to comment out the line below:
preferred_syntax = :scss

on_stylesheet_saved do |filename|
  s = filename + ".liquid"
  puts "copying to: " + s
  FileUtils.cp(filename, s)
  puts "removing: " + filename
end