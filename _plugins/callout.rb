# Source: https://stackoverflow.com/questions/19169849/how-to-get-markdown-processed-content-in-jekyll-tag-plugin

module Jekyll
  module Tags
    class CalloutTag < Liquid::Block
      def initialize(tag_name, type, tokens)
        super
        type.strip!
        if %w(info warning success).include?(type)
          @type = type
        else
          puts "{% callout #{type} %} not supported. Defaulting to 'info'"
          @type = "info"
        end

        if @type == 'warning'
          @fa = 'warning'
          @header = 'Warning'
        elsif @type =='success'
          @fa = 'lightbulb-o'
          @header = 'Tip'
        else
          @fa = 'info-circle'
          @header = 'Note'
        end
      end

      def render(context)
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        output = converter.convert(super(context))

        "<div class=\"callout callout-#{@type}\">
          <h5><i class=\"fa fa-#{@fa}\"></i> #{@header}</h5>
          #{output}
        </div>"
      end
    end
  end
end

Liquid::Template.register_tag('callout', Jekyll::Tags::CalloutTag)