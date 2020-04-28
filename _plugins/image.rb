module Jekyll
  module Tags
    class ImageTag < Liquid::Tag
      def render(context)
        if tag_contents = determine_arguments(@markup.strip)
          src, caption = tag_contents[0], tag_contents[1]
          baseurl = context.registers[:site].config['baseurl']
          img_tag(src, baseurl, caption)
        else
          raise ArgumentError.new <<-eos
  Syntax error in tag 'image' while parsing the following markup:
  
    #{@markup}
  
  Valid syntax:
    for image: {% image icon.png %}
    for image with caption: {% image icon.png This is a caption. %}
  eos
        end
      end

      private
  
      def determine_arguments(input)
        matched = input.split(" ", 2)
        if matched.length == 0
          false
        elsif matched.length > 1
          [matched[0].to_s.strip, matched[1].to_s.strip]
        else
          [matched[0].to_s.strip, ""]
        end
      end

      def img_tag(src, baseurl, caption = nil)
        if caption.empty?
          "<a href=\"#{baseurl}/images/#{src}\" target=\"_blank\" rel=\"lightbox\">
             <img class=\"img-responsive img-thumbnail img-tag\" src=\"#{baseurl}/images/#{src}\" />
          </a>"
        else
          "<figure>
            <a href=\"#{baseurl}/images/#{src}\" target=\"_blank\" rel=\"lightbox\">
              <img class=\"img-responsive img-thumbnail img-tag\" src=\"#{baseurl}/images/#{src}\" alt=\"#{caption}\" />
            </a>
            <figcaption>#{caption}</figcaption>
          </figure>"
        end
      end
    end
  end
end

Liquid::Template.register_tag('image', Jekyll::Tags::ImageTag)