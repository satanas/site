desc "Publish post"
task :publish do
  # Update index.html
  system "cp index.template index.html"
  system "bundle exec jekyll build"
  system "mv _site/index.html ."
end
