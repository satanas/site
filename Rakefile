desc "Publish post"
task :publish do
  # Update index.html
  system "cp index.template index.html"
  system "cp keybase.txt _site/keybase.txt"
  system "bundle exec jekyll build"
end

desc "Run server locally"
task :serve do
  system "bundle exec jekyll serve"
end
