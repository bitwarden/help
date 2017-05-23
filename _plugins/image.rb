module Jekyll
  module Tags
    class ImageTag < Liquid::Tag
      def render(context)
        src = @markup.strip
        "<a href=\"/images/#{src}\" target=\"_blank\">
            <img class=\"img-responsive img-thumbnail\" src=\"/images/#{src}\" />
        </a>"
      end
    end
  end
end

Liquid::Template.register_tag('image', Jekyll::Tags::ImageTag)