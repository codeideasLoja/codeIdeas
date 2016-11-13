class Home < PushType::Node

  # By default a node can have children of any other node type.
  # Optionally pass a list of acceptable node types or prevent
  # any descendents by passing false.
  has_child_nodes :all

  # Model the content by adding custom fields to the node.

  # Seccion Acerca
  field :acercaSubtitulo, :string
  field :acercaTexto, :text

  # Seccion contadores
  field :contClientes, :number
  field :contProyectos, :number
  field :contTickets, :number
  field :contHoras, :number

  # Seccion skills
  field :skillPhp, :number
  field :skillDiseno, :number
  field :skillHtmlCSS, :number
  field :skillMarketing, :number
  field :skillRails, :number
  field :skillJavascript, :number
  field :skillDjango, :number
  field :skillDesarrolloMovil, :number

  # Seccion Servicios
  field :serviciosWeb, :text
  field :serviciosSEO, :text
  field :serviciosDiseno, :text
  field :serviciosDesMovil, :text

end