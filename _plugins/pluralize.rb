# pluralize
#
# A Liquid filter to make it easy to form correct plurals.
#
# https://github.com/bdesham/pluralize

module Pluralize
    def pluralize(number, singular, plural = nil)
        number = number.to_i
        if number == 1
            "#{singular}"
        elsif plural.nil?
            "#{singular}s"
        else
            "#{plural}"
        end
    end
end

Liquid::Template.register_filter(Pluralize)