class MessageMailer < ActionMailer::Base

  default from: "codeideas.loja@gmail.com"
  default to: "codeideas.loja@gmail.com"

  def new_message(message)

    @message = message

    mail subject: "Mensaje de #{message.name}"

  end

end
