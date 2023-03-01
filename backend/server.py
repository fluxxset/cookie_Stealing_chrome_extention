import http.server
import socketserver

class MyRequestHandler(http.server.BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        print(post_data.decode('utf-8'))

httpd = socketserver.TCPServer(("", 8000), MyRequestHandler)
print("Listening on port 8000...")
httpd.serve_forever()
