defmodule PhwocketExampleWeb.RoomWSChannel do
  use PhoenixWS.Channel, web: PhwocketExampleWeb

  def join("room:" <> _, _payload, socket) do
    {:ok, socket}
  end

  # Handle messages from the Client
  def phoenix_ws_in(data, socket) do
    # This is just an echo server, so we just broadcast the same message back into the client
    broadcast!(socket, data)
    {:noreply, socket}
  end
end
