var tipuesearch = {"pages": [{'title': 'About', 'text': 'CMSIMDE來源: https://github.com/mdecourse/cmstemplate \n 小組倉儲: https://github.com/40823245/cad2020bg2 \n 小組成員: \n \xa0 40823211 \xa0/\xa0 40823211 \xa0 40823213 \xa0/\xa0 40823213 \xa0 40823214 \xa0/\xa0 40823214 \xa0 40823222 \xa0/\xa0 40823222 \xa0 40823229 \xa0/\xa0 40823229 \xa0 40823230 \xa0/\xa0 40823230 \xa0 40823231 \xa0/\xa0 40823231 \xa0 40823236 \xa0/\xa0 40823236 \xa0 40823242 \xa0/\xa0 40823242 \xa0 40823245 \xa0/\xa0 40823245 \xa0 (組長) \n', 'tags': '', 'url': 'About.html'}, {'title': '討論會議', 'text': '使用gitter進行討論，並錄製過程和截圖 \n 小組gitter: https://gitter.im/cad2020bg2/community \n 進度: \n 12/04 \n 使用gitter進行討論，並錄製過程和截圖 \n 12/11 \n 討論並投票圖檔的版本 \n 12/25 \n 修改圖檔和模擬 \n 01/07 \n 程式模擬和做動模擬 \n 01/15 \n 程式模擬和修正之前的錯誤 \n', 'tags': '', 'url': '討論會議.html'}, {'title': '12-04', 'text': '\n 討論結果為要做彈珠台，並小組分工 \n 因為錄製影片出問題，所以後續內容用截圖 \n \n \n \n \n \n', 'tags': '', 'url': '12-04.html'}, {'title': '12-11', 'text': '  \n 討論結果 \n 圖檔 \n \n', 'tags': '', 'url': '12-11.html'}, {'title': '12-24', 'text': '測試影片: \n \n pinblall-3.ttt \n 圖檔 \n 提出問題並修改 \n \n', 'tags': '', 'url': '12-24.html'}, {'title': '01-07', 'text': '程式模擬和做動模擬: \n \n pinblall-9.ttt \n 圖檔 \n 第1次測試因為stick為可穿透的，所以ball沒辦法被stick擋住，還有程式控制鍵盤上下鍵所位移的位置和設定需再調整，第2次測試stick為不可穿透，但程式控制鍵盤上下有問題，所以還須修正 \n \n', 'tags': '', 'url': '01-07.html'}, {'title': '01-15', 'text': "測試影片 \n \n pinblall-17.ttt \n 圖檔 \n 將之前的桿子改成圓桿，球和桿子能確實地做動，但還是有破圖、球卡到角飛出去、桿子座標亂飄等問題尚未解決。 \n 程式 \n -- model in Solvespace 500 mm = 5000 mm in V-rep\n--[[\nSimulation is 10 times of realistic environment\nfloor in Solvespace 2.5 m x 2.5 m = 25 m x 25 m in V-rep\nball is in Solivespace 1g (0.001) = 0.01 kg in V-rep\nCylinder is in Solvespace 0.1 kg (100g) = 1kg in V-rep (0.1 for Inertia)\n]]\n \nthreadFunction=function()\n    while sim.getSimulationState()~=sim.simulation_advancing_abouttostop do\n        -- Read the keyboard messages (make sure the focus is on the main window, scene view):\n        message,auxiliaryData=sim.getSimulatorMessage()\n        while message~=-1 do\n            if (message==sim.message_keypress) then\n                if (auxiliaryData[1]==2007) then\n                    -- up key\n                    velocity=0.5\n                    Cylinder_back = 0\n                end\n                if (auxiliaryData[1]==2008) then\n                    -- down key\n                     Cylinder_back = 1\n                     velocity = -0.5\n                end\n            end\n            message,auxiliaryData=sim.getSimulatorMessage()\n        end\n  \n        -- We take care of setting the desired Cylinder position:\n        if Cylinder_back == 1\n            then sim.setObjectPosition(Cylinder,-1, position)\n        end\n        sim.setJointTargetVelocity(joint,velocity)\n  \n        -- Since this script is threaded, don't waste time here:\n        sim.switchThread() -- Resume the script at next simulation loop start\n    end\nend\n-- Put some initialization code here:\n-- Retrieving of some handles and setting of some initial values:\njoint=sim.getObjectHandle('joint')\nCylinder=sim.getObjectHandle('Cylinder')\nvelocity=0\nCylinder_back=0\nposition=sim.getObjectPosition(Cylinder,-1)\n  \n-- Here we execute the regular thread code:\nres,err=xpcall(threadFunction,function(err) return debug.traceback(err) end)\nif not res then\n    sim.addStatusbarMessage('Lua runtime error: '..err)\nend\n  \n-- Put some clean-up code here: \n", 'tags': '', 'url': '01-15.html'}, {'title': '小組分工', 'text': '繪圖:40823213 40823214 40823230 \n 程式:40823245 \n 機構:40823211 40823222 40823231 40823236 40823242', 'tags': '', 'url': '小組分工.html'}]};