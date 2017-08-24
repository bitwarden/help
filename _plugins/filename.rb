module FileName
    def filename(path)
        extn = File.extname path
        name = File.basename path, extn
        "#{name}"
    end
end

Liquid::Template.register_filter(FileName)