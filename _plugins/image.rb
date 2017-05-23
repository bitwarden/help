module Jekyll
  module Tags
    class ImageTag < Liquid::Block
      def initialize(tag_name, src)
        super
        src.strip!
        @src = src
      end

      def render(context)
        "<a href=\"#{src}\" target=\"_blank\">
            <img class=\"img-responsive img-thumbnail\" src=\"#{src}\" />
        </a>"
      end
    end
  end
end

Liquid::Template.register_tag('image', Jekyll::Tags::ImageTag)