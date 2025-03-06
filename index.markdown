---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---




## Freeway -- the most efficient way to iterate on meshes and images in Roblox Studio. 

# The Old Way: 
 * It takes about a minute to upload images and update asset IDs for a single SurfaceAppearance. 
 * It takes about 30s to upload a mesh and update asset ID for a MeshPart

Multiply this by 10 iterations per asset, and then multiply by hundreds(or thousands) of assets per game. 



# The Freeway: 
* SurfaceAppearance update time shrinks from ~56s to ~3s
* Mesh update time shrinks form ~36s to ~3s
* Manual steps per iteration shrinks ~10 -> 0

## How Does It Work? 

Freeway lets you _wire_ files in your local folder to instances in your game. For example, you can _wire_ an image file to a Decal(or a 3d model file to a MeshPart) in your game, and it will update automatically every time you overwrite the file in the folder. 

At the same time, Freeway minimizes the amount of assets created in your inventory by using EditableImage and EditableMesh. 




## Where Do I Start? 
* Download and install the deskop application
* Enable Studio Beta feature called `CreateAssetAsync Lua API`
* Open Freeway plugin in Studio Plugins tab
* Follow the app's and the plugin's instructions. 

## Supported Formats and Limitations 
* For images, `png` and `jpg` are supported
* For meshes, Freeway only understands single-mesh `OBJ` files(for now). If your `OBJ` contains more than one mesh, Freeway will pick the first one. It also _can't decimate meshes_(yet!), so please make sure your mesh fits the Roblox verts count limit.





## Contributions, Feature Requests and Bug Reports
* Get in touch with us on <a href="https://discord.gg/hDwxAhKN7G">Discord</a> and  <a href="https://github.com/freeway-rbx/freeway">GitHub</a>



With ❤️, the Freeway crew.



<!-- 
This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](https://jekyllrb.com/)

You can find the source code for Minima at GitHub:
[jekyll][jekyll-organization] /
[minima](https://github.com/jekyll/minima)

You can find the source code for Jekyll at GitHub:
[jekyll][jekyll-organization] /
[jekyll](https://github.com/jekyll/jekyll)


[jekyll-organization]: https://github.com/ -->
