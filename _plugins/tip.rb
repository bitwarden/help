module Jekyll
  module Tags
    class TipTag < Liquid::Block
      def render(context)
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        output = converter.convert(super(context))
        "<div class=\"callout callout-success\">
            <h3><i class=\"fa fa-lightbulb-o\"></i> Tip</h3>
            #{output}
        </div>"
      end
    end
  end
end

Liquid::Template.register_tag('tip', Jekyll::Tags::TipTag)