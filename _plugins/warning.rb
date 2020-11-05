module Jekyll
  module Tags
    class WarningTag < Liquid::Block
      def render(context)
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        output = converter.convert(super(context))
        "<div class=\"callout callout-warning\">
            <h5><i class=\"fa fa-warning\"></i> Warning</h5>
            #{output}
        </div>"
      end
    end
  end
end

Liquid::Template.register_tag('warning', Jekyll::Tags::WarningTag)