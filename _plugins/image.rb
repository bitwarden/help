module Jekyll
  module Tags
    class ImageTag < Liquid::Tag
      def render(context)
        src = @markup.strip
        baseurl = Jekyll.configuration({})['baseurl']
        "<a href=\"#{baseurl}/images/#{src}\" target=\"_blank\" rel=\"lightbox\">
            <img class=\"img-responsive img-thumbnail img-tag\" src=\"#{baseurl}/images/#{src}\" />
        </a>"
      end
    end
  end
end

Liquid::Template.register_tag('image', Jekyll::Tags::ImageTag)