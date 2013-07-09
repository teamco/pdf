class CvGenerateController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.pdf do
        #render :pdf => 'my_pdf', # pdf will download as my_pdf.pdf
        #       :layout => 'pdf', # uses views/layouts/pdf.haml
        #       :show_as_html => params[:debug].present? # renders html version if you set debug=true in URL

        render :pdf => "file_name",
               :template => 'cv_generate/offers/show',
               :layout => 'pdf',
               :footer => {
                   :center => "Center",
                   :left => "Left",
                   :right => "Right"
               }

      end
    end
  end

  #def show
  #  format.pdf do
  #    @example_text = "some text"
  #    render :pdf => "file_name",
  #           :template => 'offers/show.pdf.erb',
  #           :layout => 'pdf',
  #           :footer => {
  #               :center => "Center",
  #               :left => "Left",
  #               :right => "Right"
  #           }
  #  end
  #end

end
