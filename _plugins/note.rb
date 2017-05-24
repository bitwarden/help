module Jekyll
  module Tags
    class NoteTag < Liquid::Block
      def render(context)
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        output = converter.convert(super(context))
        "<div class=\"callout callout-info\">
            <h3><i class=\"fa fa-info-circle\"></i> Note</h3>
            #{output}
        </div>"
      end
    end
  end
end

Liquid::Template.register_tag('note', Jekyll::Tags::NoteTag)