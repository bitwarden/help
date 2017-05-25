module Jekyll
  module Tags
    class TableTag < Liquid::Block
      def render(context)
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        output = converter.convert(super(context))
        "<div class=\"table-responsive\">
            #{output}
        </div>"
      end
    end
  end
end

Liquid::Template.register_tag('table', Jekyll::Tags::TableTag)