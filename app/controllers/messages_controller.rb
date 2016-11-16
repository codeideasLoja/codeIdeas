class MessagesController < ApplicationController

  def new

    @message = Message.new

  end

  def create

    @message = Message.new(message_params)

    if @message.valid?

      MessageMailer.new_message(@message).deliver
      flash[:success] = "Tu mensaje ha sido envíado"
      redirect_to contacto_path

    else

      flash[:danger] = "No se puede enviar el mensaje."
      render :new

    end

  end

  private

    def message_params

      params.require(:message).permit(:name, :email, :content)

    end

end

